const colors = require('colors')

function printBlogPost(blogPost){
    console.log(`${colors.blue(blogPost.author)} wrote ${colors.green(blogPost.text)}`)
}

function printBlogPostHistory(author){
    author.blogPosts.forEach(printBlogPost)
}

module.exports = { printBlogPost, printBlogPostHistory }