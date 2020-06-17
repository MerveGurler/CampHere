const Blogpost = require('./blogpost')

class Camper {
    constructor(name, mail, password) {
        this.name = name
        this.mail = mail
        this.password = password 
        this.followedUsers=[]
        this.likedCampsites = []
        this.visitedCampsites = []
        this.wantToGoCampsites = []
        this.blogComments = []
    }

    follow(user) {
        this.followedUsers.push(user)
    }

    like(campsite) {
        this.likedCampsites.push(campsite)
    }

    visited(campsite) {
        this.visitedCampsites.push(campsite)
    }

    wantToGo(campsite){
        this.wantToGoCampsites.push(campsite)
    }

    writeBlogComment(blogpost){
        this.blogComments.push(blogpost)
    }
}

class Blogger extends Camper {
    constructor(name, mail, password) {
        super(name, mail, password)
        this.blogPosts = []
    }

    write(blogpost) {
        this.blogPosts.push(blogpost)
        return blogpost
    }
} 

module.exports = {Camper, Blogger}
