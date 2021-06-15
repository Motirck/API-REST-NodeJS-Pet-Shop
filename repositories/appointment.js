const runQuery = require('../infrastructure/database/queries')

class Appointment{
    add(appointment){
        const query = 'INSERT INTO Appointments SET ?'
        return runQuery(query, appointment);
    }

    getAll(){
        const query = 'SELECT * FROM Appointments';
        return runQuery(query);
    }
}

module.exports = new Appointment;