const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

     async getAllRecipes(req, res) {

        //Obtenemos la promesa
        var result = await model.getAllRecipes()
        console.log(result)

        return res.send(result)
    },

    async saveRecipe(req, res) {

        var body = req.body
        console.log(body)
        var result = await model.save(body)
        console.log(result)

        return res.send(result)
    },

    async getRecipeById(req, res) {

        var id = req.params.ID
        console.log(id)

        var result = await model.getRecipeById(id)
        console.log(result)

        return res.send(result)
    },

    async updateRecipe(req, res){

        var body = req.body
        console.log(body)

        var result = await model.update(body)
        console.log(result)

        return res.send(result)
        
    }
}