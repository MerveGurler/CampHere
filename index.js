const {camperDatabase, authorDatabase, blogPostDatabase} = require('./database')
const printBlogPostHistory = require('./lib/print-blogpost-history')
const printFollowingHistory = require('./lib/print-following-history')

const ata = camperDatabase.findBy('name', 'Ata')
const evren = authorDatabase.findByName('Evren')

ata.follow(evren)
camperDatabase.update(ata)
authorDatabase.update(evren)

printFollowingHistory(ata)
printBlogPostHistory(evren)

console.log(camperDatabase.findBy('name','Ata'))
console.log(authorDatabase.findByName('Evren'))
