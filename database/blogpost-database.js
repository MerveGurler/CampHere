const BaseDatabase = require('./base-database')
const Blogpost = require('../model/blogpost')

class blogPostDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new blogPostDatabase(Blogpost)