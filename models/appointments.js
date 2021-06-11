const connection = require('../infrastructure/connection.js');

class Appointments {
    add(appointment){
        const sql = 'INSERT INTO Appointments SET ?'

        connection.query(sql, appointment, (error, results) => {
            if (error) {
                console.log(error);
            }
            else{
                console.log(results);
            }
        })
    }
}

module.exports = new Appointments;