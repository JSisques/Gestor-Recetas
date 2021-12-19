const express = require('express')
const app = express()

//Settings
app.set('port', 8080)

//Para decodificar los JSON
app.use(express.json())

//Routes
app.use(require('./server/microservices/recipe/routes'))

module.exports = app