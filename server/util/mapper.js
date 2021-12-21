const Recipe = require("../entities/recipe")
const Ingredient = require("../entities/ingredient")
const toolbox = require('./toolbox')

module.exports = {

    recipeFromJson(json) {

        var id = json.id || 0
        var name = json.name
        var type = json.type

        var ingredients = []
        json.ingredients.forEach(ingredient => {
            ingredients.push(this.ingredientFromJson(ingredient))
        });

        var book = json.book
        var plate = json.plate
        var calories = json.calories
        var photoUrl = json.photoUrl
        var photoUrlBackup = json.photoUrlBackup
        var grade = json.grade
        var lastModificationDateTime = toolbox.getDateTime()
        var creationDateTime = json.creationDateTime || toolbox.getDateTime()

        var recipe = new Recipe(id, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, lastModificationDateTime, creationDateTime)

        return recipe
    },

    ingredientFromJson(json) {

        var name = json.name
        var creationDateTime = json.creationDateTime

        var ingredient = new Ingredient(name, creationDateTime)

        return ingredient

    }
}