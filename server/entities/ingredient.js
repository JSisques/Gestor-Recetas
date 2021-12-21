module.exports = class Ingredient{
    
    constructor(id, name, creationDateTime){
        this.id = id
        this.name = name
        this.creationDateTime = creationDateTime
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("creationDateTime: " + this.creationDateTime)
    }
}
