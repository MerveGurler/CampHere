const {Camper, Author} = require('./model/camper')
const Blogpost = require('./model/blogpost')
const {camperDatabase, blogPostDatabase} = require('./database')

const printBlogPostHistory = require('./lib/print-blogpost-history')
const printFollowingHistory = require('./lib/print-following-history')
const authorDatabase = require('./database/author-database')


const banu = new Camper(undefined, 'Banu')
const ata = new Camper(undefined, 'Ata')
const hanefi = new Camper(undefined, 'Hanefi')
const asli = new Camper(undefined, 'Asli')

const evren = new Author('Evren')

ata.follow(banu)
ata.follow(asli)
ata.follow(hanefi)
ata.follow(evren)

camperDatabase.save(['ata', 'hanefi', 'asli', 'banu'])

const aslan = Camper.create({name: 'Aslan'})
camperDatabase.insert(aslan)
const campers = camperDatabase.load()
campers.forEach(printFollowingHistory)


evren.write('Camping at Night')
evren.write('Travel Guide')
evren.write('Surviving Class')

authorDatabase.save(evren)
blogPostDatabase.save(['Camping at Night', 'Travel Guide', 'Survivig Class'])

const authors = authorDatabase.load()
authors.forEach(printBlogPostHistory)

const blogposts = blogPostDatabase.load()
blogposts.forEach(printBlogPostHistory)

