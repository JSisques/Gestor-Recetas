const dao = require('./dao')
const Recipe = require('../../entities/recipe')

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
        var photo = json.photo
        var grade = json.grade
        var creationDateTime = json.creationDateTime
        var lastModificationDateTime = json.lastModificationDateTime

        var recipe = new Recipe(0, name, type, ingredients, book, plate, calories, photo, grade, creationDateTime, lastModificationDateTime)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertRecipe(recipe)

        return result
    }

}