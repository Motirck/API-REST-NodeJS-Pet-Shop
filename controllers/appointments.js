const appointment = require('../models/appointments');

module.exports = app => {
    // O req é o que a API recebe e res é o que ela devolverá
    app.get('/appointments', (req, res) => res.send('Você está na rota de atendimentos - GET'));

    app.post('/appointments', (req, res) => {
        const appointmentBody = req.body;

        appointment.add(appointmentBody);
        res.send('Você está na rota de atendimentos - POST')
    })
}
