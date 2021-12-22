const express = require('express')
const constants = require('./server/util/constants')
const path = require('path')
const app = express()

//Settings
app.set('port', 8080)
app.set('views', path.join(__dirname + '/server/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

// Servimos archivos estáticos en la carpeta public
app.use(express.static(path.join(__dirname + '/public')))

//Para decodificar los JSON
app.use(express.json())

//Routes API
app.use(constants.API_PATH, require('./server/microservices/recipe/routes'))
app.use(constants.API_PATH, require('./server/microservices/ingredient/routes'))
app.use(constants.API_PATH, require('./server/microservices/info/routes'))

//Routes Web
app.use(require('./server/microservices/web/routes'))

module.exports = app