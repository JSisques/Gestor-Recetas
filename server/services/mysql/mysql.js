const mysql = require('mysql')
const config = require('../../config/database')

module.exports = {

    connect() {

        var connection = mysql.createConnection({
            host: config.HOST,
            user: config.USER,
            password: config.PASSWORD,
            database: config.DATABASE,
        });

        connection.connect();

        console.log("Conexion con BBDD establecida")

        return connection
    },

    disconnect(connection) {
        console.log("Conexion BBDD finalizada")
        return connection.end()
    },

    async executeQuery(query) {
        var connection = this.connect()

        //Utilizamos promesas al ser un proceso asincrono el metodo query de la libreria mysql
        const promise = new Promise((resolve, reject) => {

            connection.query(query, (err, results, fields) => {
                if (err) return reject(err);

                //console.log('The solution is: ', results);

                return resolve(results)

            })
        })

        //Devolvemos la promesa que en un futuro tendrá los datos correspondientes de la query
        return promise

    },

    async executeQueryWithParams(query, params) {
        var connection = this.connect()

        //Utilizamos promesas al ser un proceso asincrono el metodo query de la libreria mysql
        const promise = new Promise((resolve, reject) => {

            connection.query(query, params, (err, results) => {
                if (err) return reject(err);

                //console.log('The solution is: ', results);

                return resolve(results)

            })
        })

        //Devolvemos la promesa que en un futuro tendrá los datos correspondientes de la query
        return promise

    }
}