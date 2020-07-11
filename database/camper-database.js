const BaseDatabase = require('./base-database')
const {Camper} = require('../model/camper')

class CamperDatabase extends BaseDatabase {
    async findByName(name) {
        const objects = await this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new CamperDatabase(Camper)