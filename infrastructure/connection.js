const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Admin123$&',
    database: 'agenda-petshop'
});

module.exports = connection;