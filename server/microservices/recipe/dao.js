const mysql = require('../../services/mysql/mysql')
const queries = require('./queries')

module.exports = {

    async insertRecipe(recipe){

        var query = queries.INSERT_RECIPE
        var params = [recipe.name, recipe.plate, recipe.calories, recipe.photoUrl, recipe.photoUrlBackup, recipe.grade, recipe.lastModificationDateTime]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 

    async getAllRecipes(){

        var query = queries.SELECT_ALL_RECIPES
        console.log(query)

        var result = await mysql.executeQuery(query)
        console.log(result)

        return result

    },

    async getRecipeById(id){

        var query = queries.SELECT_RECIPE_BY_ID
        var params = [id]
        
        console.log(query)

        var result = await mysql.executeQueryWithParams(query, params)
        console.log(result)

        return result[0]

    },

    async updateRecipe(recipe){

        var query = queries.UPDATE_RECIPE
        var params = [recipe.name, recipe.plate, recipe.calories, recipe.photoUrl, recipe.photoUrlBackup, recipe.grade, recipe.lastModificationDateTime, recipe.id]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 
}