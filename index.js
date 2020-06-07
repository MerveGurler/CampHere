const User = require('./user')
const Author = require('./user')
const Blogpost = require('./blogpost')
const Place = require('./place')

const merve = new User('Merve') 
const mehmet = new User('Mehmet')

merve.follow(mehmet)

const mine = new Author('Mine')
const blogPost = new Blogpost('Essay by Mine', 'mine')
const placeName = new Place ('Red Tent Camping', 'Australia', '5 stars')

mine.write(blogPost)

merve.comment(blogPost)

merve.rate(blogPost)

merve.like(placeName)

merve.like(blogPost)
