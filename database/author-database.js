const BaseDatabase = require('./base-database')
const Author = require('../model/camper')

class authorDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new authorDatabase(Author)