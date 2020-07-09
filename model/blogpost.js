class Blogpost {
    constructor (text, author) {
        this.text = text
        this.author = author
    }

    static create({text, author}) {
        return new Blogpost(text, author)
    }
}

module.exports = Blogpost