const Recipe = require("../entities/recipe")
const Ingredient = require("../entities/ingredient")
const toolbox = require('./toolbox')

module.exports = {

    recipeFromJson(json) {

        var id = json.id || 0
        var name = json.name 
        var type = json.type 

        var ingredients = json.ingredient 
        /*
        json.ingredients.forEach(ingredient => {
            ingredients.push(this.ingredientFromJson(ingredient))
        });
        */

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

    recipeFromDatabase(json) {

        var id = json.ID || 0
        var name = json.NAME
        var type = json.TYPE

        var ingredients = json.INGREDIENT
        /*
        json.ingredients.forEach(ingredient => {
            ingredients.push(this.ingredientFromJson(ingredient))
        });
        */

        var book = json.BOOK
        var plate = json.PLATE
        var calories = json.CALORIES
        var photoUrl = json.PHOTO_URL
        var photoUrlBackup = json.PHOTO_URL_BACKUP
        var grade = json.GRADE
        var lastModificationDateTime = toolbox.getDateTime()
        var creationDateTime = json.CREATION_DATETIME || toolbox.getDateTime()

        var recipe = new Recipe(id, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, lastModificationDateTime, creationDateTime)

        return recipe
    },

    ingredientFromJson(json) {

        var id = json.id || 0
        var name = json.name
        var calories = json.calories
        var creationDateTime = json.creationDateTime || toolbox.getDateTime()

        var ingredient = new Ingredient(id, name, creationDateTime, calories)

        return ingredient

    }
}