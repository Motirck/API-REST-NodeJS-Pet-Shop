const connection = require('./connection')

const runQuery = (query, parameters = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        })
    })
}

module.exports = runQuery;