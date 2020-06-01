class User {
    constructor(name, mail, password, blogpost){
        this.name = name
        this.mail = mail
        this.password = password
        this.blogpost = blogpost
    }

    comment (Posts) {
        console.log(this.placename + 'is' + '' + ' I give' + this.score);
    }

    follow (User) {
        console.log('Hi' + user.name + 'is following you');
    }

    giveScore (Place) {
        console.log(this.name + 'gave' + this.score);
    }

    savePost (Posts) {
        console.log(this.name + 'saved' + this.text);
    }
}

class Posts {
    constructor (text, auther){
        this.text = text
        this.auther = auther
    }
}

class Place {
     constructor (placeName, location, score, comments){
        this.placeName = placeName
        this.location = location
        this.score = score
        this.comments = comments
    }
}

const Filter = [
    "opportunities",
    "activities", 
    "categories"
];




const Filter = new Array ["opportunities", "activities", "categories"]

const User = new User('Merve', 'ggurler.merve@gmail.com', '123456+')
const User = new User('Mehmet', 'mehmet@gmail.com', '111222*')


