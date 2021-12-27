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

        


        if(!isNaN(id)){

            var result = await dao.getRecipeById(id)

            var recipe = mapper.recipeFromDatabase(result)

            result = await dao.getIngredientsOfRecipe(id)

            result.forEach(ingredient => {
                ingredient = mapper.ingredientFromDatabase(ingredient)
                recipe.ingredients.push(ingredient)
            });

            result = await dao.getStepsOfRecipe(id)

            result.forEach(step => {
                step = mapper.stepFromDatabase(step)
                recipe.steps.push(step)
            });

            console.log(recipe)

        //query = queries.SELECT_RECIPE_INGREDIENTS
        //result = await mysql.executeQueryWithParams(query, params)

            return recipe
        } 

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