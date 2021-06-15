const moment = require('moment');
const axios = require('axios');
const connection = require('../infrastructure/database/connection');
const repository = require('../repositories/appointment');

class Appointments {
    add(appointment) {
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

            return repository.add(appointmentWithDate).then
                (results => {
                    const id = results.insertId;
                    return { ...appointment, id };
                })
        }
    }

    getAll(res) {
        const query = 'SELECT * FROM Appointments';
        connection.query(query, (error, results) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(200).json(results);
            }
        })
    }

    getOne(id, res) {
        const query = `SELECT * FROM Appointments WHERE id=${id}`

        connection.query(query, async (error, results) => {
            const appointment = results[0];
            const cpf = appointment.client;

            if (error) {
                res.status(400).json(error);
            }
            else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`);

                appointment.client = data;

                res.status(200).json(appointment);
            }
        })
    }

    update(id, data, res) {
        if (data.date) {
            data.date = moment(data.date, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
        }
        const query = 'UPDATE Appointments SET ? WHERE id=?'

        connection.query(query, [data, id], (error) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(200).json({ ...data, id });
            }
        })
    }

    delete(id, res) {
        const query = 'DELETE FROM Appointments WHERE id=?'

        connection.query(query, id, (error) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(200).json({ idDeleted: id });
            }
        })
    }
}

module.exports = new Appointments;