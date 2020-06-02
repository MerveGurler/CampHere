class User {
    constructor(name, mail, password){
        this.name = name
        this.mail = mail
        this.password = password     
    }

    comment(posts) {
        console.log();
    }

    follow(user) {
        console.log('Hi' + user.name + 'is following you');
    }   
}

class Auther extends User {
    constructor(name, mail, password) {
        super(name, mail,password)
        this.blogposts = [post1, post2, post3]
    }
   
    write(posts) {
        console.log();
    }    
}

class Posts {
    constructor (text, auther){
        this.text = text
        this.auther = auther
    }
}

const user = new User ('Merve', 'ggurler.merve@gmail.com', '123456+')
const user = new User ('Mehmet', 'mehmet@gmail.com', '567890+')
