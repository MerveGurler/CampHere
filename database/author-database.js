const BaseDatabase = require('./base-database')
const {Author} = require('../model/camper')

class AuthorDatabase extends BaseDatabase {
    async findByName(name) {
        const objects = await this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new AuthorDatabase(Author)