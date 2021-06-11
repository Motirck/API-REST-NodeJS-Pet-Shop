const moment = require('moment');
const connection = require('../infrastructure/connection.js');

class Appointments {
    add(appointment, res) {
        const createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(appointment.date, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');

        const isValidDate = moment(date).isSameOrAfter(createdDate);
        const isValidClient = appointment.client.length >= 5;
        const validations = [
            {
                name: 'data',
                valid: isValidDate,
                message: 'Data deve ser maior ou igual a data atual'
            },
            {
                name: 'cliente',
                valid: isValidClient,
                message: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const errors = validations.filter(field => !field.valid);

        if (errors.length > 0) {
            res.status(400).json(errors);
        }
        else {
            const appointmentWithDate = { ...appointment, createdDate, date };

            const sql = 'INSERT INTO Appointments SET ?'

            connection.query(sql, appointmentWithDate, (error, results) => {
                if (error) {
                    res.status(400).json(error);
                }
                else {
                    res.status(201).json(results);
                }
            })
        }
    }
}

module.exports = new Appointments;