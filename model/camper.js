const Blogpost = require('./blogpost')
const uuid = require('uuid')

class Camper {
    constructor (id = uuid.v4(), name) {
        this.id = id
        this.name = name
        this.followedCampers = []
        this.likedCampsites = []
        this.visitedCampsites = []
        this.plannedCamps = []
    }
    
    follow(camper) {
        this.followedCampers.push(camper)  
    }
    
    static create({id, name}) {
        return new Camper(id, name)
    }
}

class Author extends Camper {
    constructor (id, name) {
        super(id, name)
        this.blogPosts = []
    }
   
    write(text) {
        const post = new Blogpost(text, this.name) 
        this.blogPosts.push(post)
        return post 
    }
}

module.exports = {Camper, Author}