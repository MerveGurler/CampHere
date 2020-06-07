class User {
    constructor(name, mail, password, blogposts, placenames) {
        this.name = name
        this.mail = mail
        this.password = password 
        this.blogposts = blogposts 
        this.placenames = placenames
    }

    follow(user) {
        console.log(this.name + " " + 'is following' + " " + user.name)
    }

    comment(blogpost){
        this.blogposts.push(blogpost)
        console.log(this.name + ' ' + 'commented at date')
    }

    rate(placename) {
        console.log(this.name + " " + 'give' + " " + this.star + ' ' + this.placename)
    }

    like(placename, blogpost) {
        console.log(this.name + " " + 'likes' + " " + this.placename)
        console.log(this.name + " " + 'likes' + " " + this.blogpost)
    }

}

class Author extends User {
    constructor(name, mail, password) {
        super(name, mail, password)
        this.blogposts = []    
    }

    write(blogpost) {
        this.blogposts.push(blogpost)
        console.log(this.name + ' ' + 'wrote' + ' ' + this.blogposts)
    }
} 

module.exports = User
module.exports = Author
