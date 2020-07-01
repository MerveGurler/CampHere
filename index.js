const colors = require ('colors')
const Camper = require('./camper').Camper
const Author = require('./camper').Author


//follow 

function printFollowingHistory(camper) {
    camper.followedCampers.forEach(followedCampers =>
    console.log(`${colors.yellow(camper.name)} is following ${colors.bgRed.white(followedCampers.name)}.`))
}

const aslan = new Camper('Aslan')
const banu = new Camper('Banu')
const ata = new Camper('Ata')

banu.follow(aslan)
banu.follow(ata)
ata.follow(banu)

printFollowingHistory(banu)
printFollowingHistory(ata) 

//write

const evren = new Author('Evren')

const post1 = evren.write('Camping at Night', 'Evren')
const post2 = evren.write('Travel Guide')
const post3 = evren.write('Surviving Class')

function printWritingBlogPost(blogPost){
    console.log(`${colors.blue(blogPost.author)} wrote ${colors.green(blogPost.text)}`)
}

function printWritingBlogPostHistory(author){
    author.blogPosts.forEach(printWritingBlogPost)
}

printWritingBlogPostHistory(evren)

