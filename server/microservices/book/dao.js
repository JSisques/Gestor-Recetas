const mysql = require('../../services/mysql/mysql')
const queries = require('./queries')

module.exports = {

    async insertBook(book){

        var query = queries.INSERT_BOOK
        var params = [book.name, book.numPages]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 

    async getAllBooks(){

        var query = queries.SELECT_ALL_BOOKS
        console.log(query)

        var result = await mysql.executeQuery(query)
        console.log(result)

        return result

    },

    async getBookById(id){

        var query = queries.SELECT_BOOK_BY_ID
        var params = [id]
        
        console.log(query)

        var result = await mysql.executeQueryWithParams(query, params)
        console.log(result)

        return result[0]

    },

    async updateBook(book){

        var query = queries.UPDATE_BOOK
        var params = [book.name, book.numPages, book.id]
        
        console.log(query)
        console.log(params)
        
        var result = await mysql.executeQueryWithParams(query, params)

        console.log(result)

        return result
    }, 
}