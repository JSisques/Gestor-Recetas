const mysql = require('../../services/mysql/mysql')
const queries = require('./queries')

module.exports = {

    async insertIngredient(ingredient){

        var query = queries.INSERT_INGREDIENT
        var params = [ingredient.name]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 

    async getAllIngredients(){

        var query = queries.SELECT_ALL_INGREDIENTS
        console.log(query)

        var result = await mysql.executeQuery(query)
        console.log(result)

        return result

    },

    async getIngredientById(id){

        var query = queries.SELECT_INGREDIENT_BY_ID
        var params = [id]
        
        console.log(query)

        var result = await mysql.executeQueryWithParams(query, params)
        console.log(result)

        return result[0]

    },

    async updateIngredient(ingredient){

        var query = queries.UPDATE_INGREDIENT
        var params = [ingredient.name,  ingredient.id]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 
}