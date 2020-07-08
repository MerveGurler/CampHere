const {camperDatabase, authorDatabase, blogPostDatabase} = require('./database')
const printBlogPostHistory = require('./lib/print-blogpost-history')
const printFollowingHistory = require('./lib/print-following-history')
const {Camper, Author} = require('./model/camper')
const Blogpost = require('./model/blogpost')

/*
const ata = new Camper(undefined, 'Ata')
const banu = new Camper(undefined, 'Banu')
const evren = new Author(undefined, 'Evren')

ata.follow(banu)
ata.follow(evren)

printFollowingHistory(ata)

const post1 = evren.write('Camping at Night', 'Evren')
const post2 = evren.write('Travel Guide')
const post3 = evren.write('Surviving Class')

printBlogPostHistory(evren)
*/

const ata = Camper.create({id: undefined, name: 'Ata'})
const banu = Camper.create({id: undefined, name: 'Banu'})
const evren = Author.create({id: undefined, name: 'Evren'})

camperDatabase.save([ata, banu])
authorDatabase.save([evren])

/*
const post1 = Blogpost.create({text: 'Camping at Night', author: 'Evren'})
const post2 = Blogpost.create({text: 'Travel Guide', author: 'Evren'})
const post3 = Blogpost.create({text: 'Surviving Class', author: 'Evren'})

blogPostDatabase.save('blogposts', [post1, post2, post3])
*/

const campers = camperDatabase.load()
campers.forEach(printFollowingHistory)

const authors = authorDatabase.load()
authors.forEach(printFollowingHistory)

const blogposts = blogPostDatabase.load()
blogposts.forEach(printBlogPostHistory)


//const ata = camperDatabase.findBy('name', 'Ata')
//const evren = authorDatabase.findByName('Evren')


//camperDatabase.update(ata)
//authorDatabase.update(evren)


//console.log(camperDatabase.findBy('name','Ata'))
//console.log(authorDatabase.findByName('Evren'))
