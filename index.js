const app = require('./app')

// Starting server at 8080
app.listen(app.get('port'), function () {
    console.log('Servidor iniciado en http://localhost:' + app.get('port'))
  })