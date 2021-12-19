const dao = require('./dao')
const Recipe = require('../../entities/recipe')
const toolbox = require('../../util/toolbox')

module.exports = {

    async getAllRecipes() {

        var result = await dao.getAllRecipes()
        console.log(result)

        return result
    },

    async getRecipe(id){

        if(!isNaN(id)) return await dao.getRecipe(id)

        else return "El id " + id + " no es un número"
        
    },

    async save(json){

        console.log(json)

        //Comprobaciones
        var name = json.name
        var type = json.type
        var ingredients = json.ingredients
        var book = json.book
        var plate = json.plate
        var calories = json.calories
        var photoUrl = json.photoUrl
        var photoUrlBackup = json.photoUrlBackup
        var grade = json.grade
        var lastModificationDateTime = toolbox.getDateTime()

        var recipe = new Recipe(0, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, lastModificationDateTime)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertRecipe(recipe)

        return result
    }

}