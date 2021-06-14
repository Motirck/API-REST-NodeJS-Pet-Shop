const connection = require('../infrastructure/connection');

class Pet {
    add(pet, res) {
        const query = "INSERT INTO Pets SET ?"

        connection.query(query, pet, error => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(200).json(pet);
            }
        })
    }
}

module.exports = new Pet();