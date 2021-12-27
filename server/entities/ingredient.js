module.exports = class Ingredient{
    
    constructor(id, name, creationDateTime, calories, quantity, measureUnit){
        this.id = id
        this.name = name
        this.creationDateTime = creationDateTime
        this.calories = calories
        this.quantity = quantity
        this.measureUnit = measureUnit
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("calories: " + this.calories)
        console.log("quantity: " + this.quantity)
        console.log("measureUnit: " + this.measureUnit)
        
    }
}
