const User = require('./user')
const Blogpost = require('./blogpost')

const merve = new User('Merve') 
const mehmet = new User('Mehmet')

merve.follow(mehmet)

const mine = new Author('Mine')
const blogPost = new Blogpost('Minenin blog post yazisi', mine);

mine.write(mine, blogPost)
