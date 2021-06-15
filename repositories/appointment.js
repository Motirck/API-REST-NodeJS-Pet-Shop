const runQuery = require('../infrastructure/database/queries')

class Appointment{
    add(appointment){
        const query = 'INSERT INTO Appointments SET ?'
        return runQuery(query, appointment);
    }
}

module.exports = new Appointment;