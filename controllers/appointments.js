const appointment = require('../models/appointments');

module.exports = app => {
    // O req é o que a API recebe e res é o que ela devolverá
    app.get('/appointments', (req, res) => {
        appointment.getAll(res);
    });

    app.get('/appointments/:id', (req, res) => {
        const id = parseInt(req.params.id);
        appointment.getOne(id, res);
    });

    app.post('/appointments', (req, res) => {
        const appointmentBody = req.body;

        appointment.add(appointmentBody)
            .then(appointmentCreated => res.status(201).json(appointmentCreated))
            .catch(error => res.status(400).json(error));
    });

    app.patch('/appointments/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const data = req.body;

        appointment.update(id, data, res);
    });

    app.delete('/appointments/:id', (req, res) => {
        const id = parseInt(req.params.id);

        appointment.delete(id, res);
    })
}