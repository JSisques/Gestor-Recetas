module.exports = class Recipe {

    constructor(id, name, type, ingredients, book, plate, calories, photoUrl, photoUrlBackup, grade, lastModificationDateTime, creationDateTime) {
        this.id = id
        this.name = name
        this.type = type
        this.ingredients = ingredients
        this.book = book
        this.plate = plate
        this.calories = calories
        this.photoUrl = photoUrl
        this.photoUrlBackup = photoUrlBackup
        this.grade = grade
        this.lastModificationDateTime = lastModificationDateTime
        this.creationDateTime = creationDateTime
    }

    print() {
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("type: " + this.type)
        console.log("ingredients: " + this.ingredients)
        console.log("book: " + this.book)
        console.log("plate: " + this.plate)
        console.log("calories: " + this.calories)
        console.log("photoUrl: " + this.photoUrl)
        console.log("photoUrlBackup: " + this.photoUrlBackup)
        console.log("grade: " + this.grade)
        console.log("createdBy: " + this.createdBy)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("lastModificationDateTime: " + this.lastModificationDateTime)
    }
}
