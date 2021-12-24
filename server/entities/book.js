module.exports = class Ingredient{
    
    constructor(id, name, creationDateTime, numPages){
        this.id = id
        this.name = name
        this.creationDateTime = creationDateTime
        this.numPages = numPages
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("numPages: " + this.numPages)
        
    }
}
