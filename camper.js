const Blogpost = require('./blogpost')

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
class Author extends Camper {
    constructor (name) {
        super(name)
        this.blogPosts = []
    }
    write(text) {
        const post = new Blogpost(text, this.name) 
        this.blogPosts.push(post)
        return post 
    }
}

module.exports = {Camper, Author}
