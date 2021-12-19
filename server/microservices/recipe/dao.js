const mysql = require('../../services/mysql/mysql')
const queries = require('./queries')

module.exports = {

    async insertRecipe(recipe){

        var query = ""
        console.log(query)
        
        var result = await mysql.executeQuery(query)

        return result
    }
}