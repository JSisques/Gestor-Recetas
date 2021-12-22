const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

     async getInfo(req, res) {

        //Obtenemos la promesa
        var result = await model.getInfo()
        console.log(result)

        return res.send(result)
    }
}