class Camper {
    constructor (name) {
        this.name = name
        this.followedCampers = []
        this.likedCampsites = []
        this.visitedCampsites = []
        this.plannedCamps = []
    }
    follow(camper) {
        this.followedCampers.push(camper)  
    }
}

class Blogpost {
    constructor (writing, author) {
        this.writing = writing
        this.author = author
    }
}

class Author extends Camper {
    constructor (name) {
        super(name)
        this.blogPosts = []
    }
    write(post) {
        const post = new Blogpost(writing, author)
        this.blogPosts.push(post)
        return post
    }
}

//follow 

/*function printFollowingHistory(camper) {
    camper.followedCampers.forEach(followedCampers =>
    console.log(`${camper.name} is following ${followedCampers.name}.`))
}

const aslan = new Camper('Aslan')
const banu = new Camper('Banu')
const ata = new Camper('Ata')

banu.follow(aslan)
banu.follow(ata)
ata.follow(banu)

printFollowingHistory(banu)
printFollowingHistory(ata) */

//write

const evren = new Author('Evren')

const post1 = evren.write('Camping at Night', 'Evren')
const post2 = evren.write('Travel Guide')
const post3 = evren.write('Surviving Class')

function printWritingBlogPost(blogPost){
    console.log(`${blogPost.author.name} wrote ${blogPost.writing}`)
}

printWritingBlogPost(post1)
printWritingBlogPost(post2)
printWritingBlogPost(post3)

//console.log(`${evren.name} has ${evren.blogPosts.length} post(s).`)
