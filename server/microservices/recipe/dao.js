const mysql = require('../../services/mysql/mysql')
const QUERIES = require('./queries')

module.exports = {

    async insertRecipe(recipe){

        var query = QUERIES.INSERT_RECIPE
        var params = [recipe.name, recipe.plate, recipe.calories, recipe.photoUrl, recipe.photoUrlBackup, recipe.grade, recipe.lastModificationDateTime]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }
}