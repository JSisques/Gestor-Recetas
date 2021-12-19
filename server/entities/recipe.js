module.exports = class Recipe{
    
    constructor(id, name, type, ingredients, book, plate, calories, photo, grade, creationDateTime, lastModificationDateTime){
        this.id = id
        this.name = name
        this.type = type
        this.ingredients = ingredients
        this.book = book
        this.plate = plate
        this.calories = calories
        this.photo = photo
        this.grade = grade
        this.creationDateTime = creationDateTime
        this.lastModificationDateTime = lastModificationDateTime
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("type: " + this.type)
        console.log("ingredients: " + this.ingredients)
        console.log("book: " + this.book)
        console.log("plate: " + this.plate)
        console.log("calories: " + this.calories)
        console.log("photo: " + this.photo)
        console.log("grade: " + this.grade)
        console.log("createdBy: " + this.createdBy)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("lastModificationDateTime: " + this.lastModificationDateTime)
    }
}
