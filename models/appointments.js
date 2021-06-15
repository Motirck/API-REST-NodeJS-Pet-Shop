const moment = require('moment');
const axios = require('axios');
const connection = require('../infrastructure/database/connection');
const repository = require('../repositories/appointment');

class Appointments {
    constructor() {
        this.validate = (params) => {
            this.validations.filter(field => {
                const { nome } = field;
                const param = params[nome];

                return !field.valid(param);
            })
        }
        this.validations = [
            {
                name: 'data',
                valid: this.isValidDate,
                message: 'Data deve ser maior ou igual a data atual'
            },
            {
                name: 'cliente',
                valid: this.isValidClient,
                message: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        this.isValidDate = ({ date, createdDate }) => moment(date).isSameOrAfter(createdDate);
        this.isValidClient = (size) => size >= 5;
    }

    add(appointment) {
        const createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(appointment.date, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');

        const params = {
            data: { date, createdDate },
            client: { size: appointment.client.length }
        }

        const errors = this.validate(params);

        if (errors.length > 0) {
            return new Promise((reject) => { reject(errors); });
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

    getAll() {
        return repository.getAll();
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