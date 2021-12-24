const dao = require('./dao')
const Book = require('../../entities/book.js')
const mapper = require('../../util/mapper')

module.exports = {

    async getAllBooks() {

        var result = await dao.getAllBooks()
        console.log(result)

        return result
    },

    async getBookById(id){

        if(!isNaN(id)) return await dao.getBookById(id)

        else return {Error: "El id " + id + " no existe"}
        
    },

    async save(json){

        console.log(json)

        var book = mapper.bookFromJson(json)
        book.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertBook(book)

        return result
    }, 

    async update(json){

        console.log(json)

        var book = mapper.bookFromJson(json)
        book.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.updateBook(book)

        return result
    }

}