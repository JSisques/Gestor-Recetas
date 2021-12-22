module.exports = class Ingredient{
    
    constructor(id, name, creationDateTime, calories){
        this.id = id
        this.name = name
        this.creationDateTime = creationDateTime
        this.calories = calories
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("calories: " + this.calories)
        
    }
}
