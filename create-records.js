const { Camper, Author } = require('./model/camper')
const Blogpost = require('./model/blogpost')
const { camperDatabase, authorDatabase, blogPostDatabase } = require('./database')
const printFollowingHistory = require('./lib/print-following-history')
const { printBlogPost } = require('./lib/print-blogpost-history')


const ata = Camper.create({id: undefined, name: 'Ata'})
const banu = Camper.create({id: undefined, name: 'Banu'})
const evren = Author.create({id: undefined, name: 'Evren'})

ata.follow(banu)
ata.follow(evren)

camperDatabase.save([ata, banu])
authorDatabase.save([evren])

const post1 = Blogpost.create({text: 'Camping at Night', author: 'Evren'})
const post2 = Blogpost.create({text: 'Travel Guide', author: 'Evren'})
const post3 = Blogpost.create({text: 'Surviving Class', author: 'Evren'})

blogPostDatabase.save([post1, post2, post3])

const campers = camperDatabase.load()
campers.forEach(printFollowingHistory)

const authors = authorDatabase.load()
authors.forEach(printFollowingHistory)

const blogposts = blogPostDatabase.load()
blogposts.forEach(printBlogPost)


const taha = Author.create({id: undefined, name: 'Taha'})
authorDatabase.insert(taha)
const authors = authorDatabase.load()
authors.forEach(printFollowingHistory)

const post4 = Blogpost.create({text: 'Mountain Days', author: 'Evren'})
blogPostDatabase.insert(post4)
const blogposts = blogPostDatabase.load()
blogposts.forEach(printBlogPost)