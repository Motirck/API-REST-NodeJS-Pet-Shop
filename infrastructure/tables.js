class Tables {
    init(connection) {
        this.connection = connection;
        this.createAppointments();
    }

    createAppointments() {
        const sql = 'CREATE TABLE IF NOT EXISTS Appointments ( ' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'client VARCHAR(50) NOT NULL, ' +
            'pet VARCHAR(20), ' +
            'service VARCHAR(20) NOT NULL, ' +
            'status VARCHAR(20) NOT NULL, ' +
            'notes text, ' +
            'PRIMARY KEY(id))'

        this.connection.query(sql, (error) => {
            // if (error) {
            //     console.log(error);
            // }
            // else {
            //     console.log('Tabela de Atendimentos criada com suceso')
            // }
        })
    }
}

// O Exports é necessário para que essa classe seja acessível de outros arquivos
module.exports = new Tables;