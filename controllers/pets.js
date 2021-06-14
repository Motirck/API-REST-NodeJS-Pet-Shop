const pet = require('../models/pets');

module.exports = app => {
    app.post('/pet', (req, res) => {
        const petBody = req.body
        pet.add(petBody, res);
    })
}