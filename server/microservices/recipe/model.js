const dao = require('./dao')
const Recipe = require('../../entities/recipe')
const mapper = require('../../util/mapper')

module.exports = {

    async getAllRecipes() {

        var recipes = await dao.getAllRecipes()

        var listRecipes = []

        for (const recipeDatabase of recipes) {

            var recipe = mapper.recipeFromDatabase(recipeDatabase)

            recipe = await this.getRecipeById(recipe.id)

            listRecipes.push(recipe)

        }

        console.log(listRecipes)

        return listRecipes
    },

    async getRecipeById(id) {

        if (!isNaN(id)) {

            var result = await dao.getRecipeById(id)

            if (result != undefined) {

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

                if (recipe.book != null) {
                    result = await dao.getBookOfRecipe(recipe.book)

                    var book = mapper.bookFromDatabase(result)

                    recipe.book = book
                }
            } else {
                recipe = {
                    error: "Esa receta no existe"
                }
            }

            console.log(recipe)

            return recipe
        }

        else return { Error: "El id " + id + " no existe" }

    },

    async save(json) {

        console.log(json)

        var recipe = mapper.recipeFromJson(json)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertRecipe(recipe)

        return result
    },

    async update(json) {

        console.log(json)

        var recipe = mapper.recipeFromJson(json)
        recipe.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.updateRecipe(recipe)

        return result
    }

}