const dao = require('./dao')
const Ingredient = require('../../entities/Ingredient')
const mapper = require('../../util/mapper')

module.exports = {

    async getAllIngredients() {

        var result = await dao.getAllIngredients()
        console.log(result)

        return result
    },

    async getIngredientById(id){

        if(!isNaN(id)) return await dao.getIngredientById(id)

        else return {Error: "El id " + id + " no existe"}
        
    },

    async save(json){

        console.log(json)

        var ingredient = mapper.ingredientFromJson(json)
        ingredient.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.insertIngredient(ingredient)

        return result
    }, 

    async update(json){

        console.log(json)

        var ingredient = mapper.ingredientFromJson(json)
        ingredient.print()

        //Obtenemos la promesa y se la pasamos al controlador
        var result = await dao.updateIngredient(ingredient)

        return result
    }

}