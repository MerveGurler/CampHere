const { Camper, Author } = require('./model/camper')
const Blogpost = require('./model/blogpost')
const { camperDatabase, authorDatabase, blogPostDatabase } = require('./database')
const printFollowingHistory = require('./lib/print-following-history')

const ata = camperDatabase.findBy('name', 'Ata')
const evren = authorDatabase.findByName('Evren')

ata.follow(evren)
camperDatabase.update(ata)

printFollowingHistory(ata)
console.log(camperDatabase.findByName('Ata'))
