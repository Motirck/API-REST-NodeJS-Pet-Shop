class Tables {
    init(connection) {
        this.connection = connection;
        this.createAppointments();
        this.createPets();
    }

    createAppointments() {
        const query = 'CREATE TABLE IF NOT EXISTS Appointments ( ' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'client VARCHAR(50) NOT NULL, ' +
            'pet VARCHAR(20), ' +
            'service VARCHAR(20) NOT NULL, ' +
            'date DATETIME NOT NULL, ' +
            'createdDate DATETIME NOT NULL, ' +
            'status VARCHAR(20) NOT NULL, ' +
            'notes text, ' +
            'PRIMARY KEY(id))'

        this.connection.query(query, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Tabela de Atendimentos criada com suceso')
            }
        })
    }

    createPets() {
        const query = 'CREATE TABLE IF NOT EXISTS Pets(' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'name varchar(50), ' +
            'image varchar(200), PRIMARY KEY (id))'

        this.connection.query(query, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Tabela de Pets criada com suceso')
            }
        })
    }
}

// O Exports é necessário para que essa classe seja acessível de outros arquivos
module.exports = new Tables;