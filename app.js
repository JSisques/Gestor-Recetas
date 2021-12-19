const express = require('express')
const app = express()

//Settings
app.set('port', 8080)

//Para decodificar los JSON
app.use(express.json());

//Routes
app.use(require('./server/microservices/recipe/routes'))

// Starting server at 8080
app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en http://localhost:' + app.get('port'))
})