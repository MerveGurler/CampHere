
class Camper {
    constructor (name) {
        this.name = name
        this.followedCampers = []
        this.likedCampsites = []
        this.visitedCampsites = []
        this.plannedCamps = []
    }
    follow(camper) {
        this.followedCampers.push(camper)  
    }

}
class Author extends Camper {
    constructor (name) {
        super(name)
        this.blogPost = []
    }
}

const aslan = new Camper('Aslan')
const banu = new Camper('Banu')
const ata = new Camper('Ata')

banu.follow(aslan)
banu.follow(ata)

function printFollowing(camper) {
    console.log(`${camper.name} is following ${camper.followedCampers.name}.`)
}

function printFollowingHistory(camper) {
    this.followedCampers.forEach(printFollowing)
}

printFollowingHistory(banu)


