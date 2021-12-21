const dao = require('./dao')
const Recipe = require('../../entities/recipe')
const mapper = require('../../util/mapper')

module.exports = {

    async getAllRecipes() {

        var result = await dao.getAllRecipes()
        console.log(result)

        return result
    },

    async getRecipeById(id){

        if(!isNaN(id)) return await dao.getRecipeById(id)

        else return {Error: "El id " + id + " no existe"}
        
    },

    async save(json){

        console.log(json)

        var recipe = mapper.recipeFromJson(json)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertRecipe(recipe)

        return result
    }, 

    async update(json){

        console.log(json)

        var recipe = mapper.recipeFromJson(json)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.updateRecipe(recipe)

        return result
    }

}