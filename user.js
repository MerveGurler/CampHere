class User {
    constructor(name, mail, password) {
        this.name = name
        this.mail = mail
        this.password = password  
    }

    follow (user) {
        console.log(this.name + " " + 'is following' + " " + user.name)
    }
}

class Author extends User {
    constructor(name, mail, password, blogposts) {
        super(name, mail, password)
        this.blogposts = []    
    }

    write(blogpost) {
        this.blogposts.push(blogpost)
    }
} 

module.export = User
