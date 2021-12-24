const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

     async getAllBooks(req, res) {

        //Obtenemos la promesa
        var result = await model.getAllBooks()
        console.log(result)

        return res.send(result)
    },

    async saveBook(req, res) {

        var body = req.body
        console.log(body)
        var result = await model.save(body)
        console.log(result)

        return res.send(result)
    },

    async getBookById(req, res) {

        var id = req.params.ID
        console.log(id)

        var result = await model.getBookById(id)
        console.log(result)

        return res.send(result)
    },

    async updateBook(req, res){

        var body = req.body
        console.log(body)

        var result = await model.update(body)
        console.log(result)

        return res.send(result)
        
    }
}