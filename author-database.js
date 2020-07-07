const BaseDatabase = require('./base-database')
const {Author} = require('../model/camper')

class AuthorDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new AuthorDatabase(Author)