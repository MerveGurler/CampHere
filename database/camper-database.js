const BaseDatabase = require('./base-database')
const Camper = require('../model/camper')

class camperDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new camperDatabase(Camper)