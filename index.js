class User {
    constructor(name, mail, password) {
        this.name = name
        this.mail = mail
        this.password = password  
    }

    follow(user) {
        console.log(this.name + " " + 'is following you');
    } 
}
    
class Auther extends User {
    constructor(blogposts) {
        this.blogposts = ['0', '1'];  
    }  
}

class Posts {
    constructor (text, auther){
        this.text = text
        this.auther = auther
    }
}

const merve = new User('Merve') 
const mehmet = new User('Mehmet')

merve.follow(mehmet)
