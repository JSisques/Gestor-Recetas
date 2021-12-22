module.exports = class Info{
    
    constructor(name, version, description, author){
        this.name = name
        this.version = version
        this.description = description
        this.author = author
    }

    print(){
        console.log("name: " + this.name)
        console.log("version: " + this.version)
        console.log("description: " + this.description)
        console.log("author: " + this.author)
        
    }
}
