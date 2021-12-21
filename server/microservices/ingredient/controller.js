const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

     async getAllIngredients(req, res) {

        //Obtenemos la promesa
        var result = await model.getAllIngredients()
        console.log(result)

        return res.send(result)
    },

    async saveIngredient(req, res) {

        var body = req.body
        console.log(body)
        var result = await model.save(body)
        console.log(result)

        return res.send(result)
    },

    async getIngredientById(req, res) {

        var id = req.params.ID
        console.log(id)

        var result = await model.getIngredientById(id)
        console.log(result)

        return res.send(result)
    },

    async updateIngredient(req, res){

        var body = req.body
        console.log(body)

        var result = await model.update(body)
        console.log(result)

        return res.send(result)
        
    }
}