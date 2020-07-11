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

const post1 = Blogpost.create({text: 'Camping at Night', author: 'Evren'})
const post2 = Blogpost.create({text: 'Travel Guide', author: 'Evren'})
const post3 = Blogpost.create({text: 'Surviving Class', author: 'Evren'})

async function main() {
    try {
        await camperDatabase.save([ata, banu])
        await authorDatabase.save([evren])
        await blogPostDatabase.save([post1, post2, post3])

        const campers = await camperDatabase.load()
        campers.forEach(printFollowingHistory)

        const authors = await authorDatabase.load()
        authors.forEach(printFollowingHistory)

        const blogposts = await blogPostDatabase.load()
        blogposts.forEach(printBlogPost)

        const taha = Author.create({id: undefined, name: 'Taha'})
        await authorDatabase.insert(taha)
        const authors = await authorDatabase.load()
        authors.forEach(printFollowingHistory)

        const post4 = Blogpost.create({text: 'Mountain Days', author: 'Evren'})
        await blogPostDatabase.insert(post4)
        const blogposts = await blogPostDatabase.load()
        blogposts.forEach(printBlogPost)

    } catch (e) {
        return console.log(e)
    }
}

main()

