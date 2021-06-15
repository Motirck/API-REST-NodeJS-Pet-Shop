const connection = require('../infrastructure/database/connection');
const filesUpload = require('../files/filesUpload')

class Pet {
    add(pet, res) {
        const query = "INSERT INTO Pets SET ?"

        filesUpload(pet.image, pet.name, (error, fullPath) => {
            if (error) {
                res.status(400).json({ error });
            }
            else {
                const newPet = { name: pet.name, image: fullPath }

                connection.query(query, newPet, error => {
                    if (error) {
                        res.status(400).json(error);
                    }
                    else {
                        res.status(200).json(newPet);
                    }
                })
            }
        })
    }
}

module.exports = new Pet();