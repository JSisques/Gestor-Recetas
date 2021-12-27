const Recipe = require("../entities/recipe")
const Ingredient = require("../entities/ingredient")
const Book = require("../entities/book")
const toolbox = require('./toolbox')
const Step = require("../entities/step")

module.exports = {

    recipeFromJson(json) {

        var id = json.id || 0
        var name = json.name 
        var type = json.type 

        var ingredients = json.ingredient || []
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
        var steps = json.steps || []
        var lastModificationDateTime = toolbox.getDateTime()
        var creationDateTime = json.creationDateTime || toolbox.getDateTime()

        var recipe = new Recipe(id, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, steps, lastModificationDateTime, creationDateTime)

        return recipe
    },

    recipeFromDatabase(json) {

        var id = json.ID || 0
        var name = json.NAME
        var type = json.TYPE

        var ingredients = json.INGREDIENT || []
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
        var steps = json.STEPS || []
        var lastModificationDateTime = toolbox.getDateTime()
        var creationDateTime = json.CREATION_DATETIME || toolbox.getDateTime()

        var recipe = new Recipe(id, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, steps, lastModificationDateTime, creationDateTime)

        return recipe
    },

    ingredientFromJson(json) {

        var id = json.id || 0
        var name = json.name
        var calories = json.calories
        var creationDateTime = json.creationDateTime || toolbox.getDateTime()
        var quantity = json.quantity
        var measureUnit = json.measureUnit

        var ingredient = new Ingredient(id, name, creationDateTime, calories, quantity, measureUnit)

        return ingredient

    },

    ingredientFromDatabase(json) {

        var id = json.ID || 0
        var name = json.NAME
        var calories = json.CALORIES_PER_100_GRAMS
        var creationDateTime = json.CREATION_DATETIME || toolbox.getDateTime()
        var quantity = json.QUANTITY
        var measureUnit = json.MEASURE_UNIT


        var ingredient = new Ingredient(id, name, creationDateTime, calories, quantity, measureUnit)

        return ingredient

    },

    stepFromDatabase(json) {

        var id = json.ID || 0
        var name = json.STEP
        var creationDateTime = json.CREATION_DATETIME || toolbox.getDateTime()

        var step = new Step(id, name, creationDateTime)

        return step

    },

    bookFromJson(json) {

        var id = json.id || 0
        var name = json.name
        var numPages = json.numPages
        var creationDateTime = json.creationDateTime || toolbox.getDateTime()

        var book = new Book(id, name, creationDateTime, numPages)

        return book

    },

    bookFromDatabase(json) {

        var id = json.ID || 0
        var name = json.NAME
        var numPages = json.NUM_PAGES
        var creationDateTime = json.CREATION_DATE || toolbox.getDateTime()

        var book = new Book(id, name, creationDateTime, numPages)

        return book

    }
}