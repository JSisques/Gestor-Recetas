const dao = require('./dao')
const Recipe = require('../../entities/recipe')
const mapper = require('../../util/mapper')
const fs = require('fs')

module.exports = {

    async getRecipeById(id){

        if(!isNaN(id)){

            var result = await dao.getRecipeById(id)
            var recipe = mapper.recipeFromDatabase(result)

            recipe.print()

            return recipe

        }  else return {Error: "El id " + id + " no existe"}
        
    },

    async getAllRecipes(){

            var result = await dao.getAllRecipes()
            var recipes = []
            result.forEach(element => {
                var recipe = mapper.recipeFromDatabase(element)
                recipes.push(recipe)
            });

            return recipes
        
    },

    async exportData(){

        var result = await dao.getAllRecipes()
        
        var file = fs.writeFile('export.json', 'Datos a exportar', function (err) {
            if (err) throw err;
            console.log('Saved!');
          });

        return file
    
}

}