const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/database/connection.js');
const tables = require('./infrastructure/database/tables.js');

connection.connect(error => {
    if (error) {
        console.log(error);
    }
    else {
        tables.init(connection);
        const app = customExpress();

        app.listen(3000);
    }

});