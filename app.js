const express = require('express')
const constants = require('./server/util/constants')
const app = express()

//Settings
app.set('port', 8080)

//Para decodificar los JSON
app.use(express.json())

//Routes
app.use(constants.API_PATH, require('./server/microservices/recipe/routes'))
app.use(constants.API_PATH, require('./server/microservices/ingredient/routes'))

module.exports = app