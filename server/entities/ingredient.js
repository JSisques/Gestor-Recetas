module.exports = class Ingredient{
    
    constructor(id, name, creationDateTime, lastModificationDateTime){
        this.id = id
        this.name = name
        this.creationDateTime = creationDateTime
        this.lastModificationDateTime = lastModificationDateTime
    }

    print(){
        console.log("id: " + this.id)
        console.log("name: " + this.name)
        console.log("creationDateTime: " + this.creationDateTime)
        console.log("lastModificationDateTime: " + this.lastModificationDateTime)
    }
}
