const pkg = require('../../../package.json')
const Info = require('../../entities/info')

module.exports = {

    async getInfo() {

        var name = pkg.name
        var version = pkg.version
        var description = pkg.description
        var author = pkg.author

        var info = new Info(name, version, description, author)

        return info
    }
}