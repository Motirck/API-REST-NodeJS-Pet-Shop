const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Admin123$&',
    database: 'agenda_petshop_nodejs'
});

module.exports = connection;