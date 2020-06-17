const {Camper, Blogger} = require('./camper')
const Campsite = require('./campsite')

const merve = new Camper('Merve','mervegur@gmail.com') 
const mehmet = new Camper('Mehmet','mehmetmert@gmail.com')
const campName = new Campsite ('Red Tent Camping', 'Australia')


merve.follow(mehmet)
function printFollowing(camper){
    console.log('${camper.name} is following ${camper.followedUsers.name}')
}
printFollowing(merve)


mehmet.like(campName)
function printLikeCampsite(camper) {
    console.log('${camper.name} liked ${camper.likedCampsites.campname}')
}
printLikeCampsite(mehmet)


merve.wantToGo('Red Tent Camping', 'Australia')
function printWanttoGo(camper) {
    console.log('${camper.name} want to go ${camper.wantToGoCampsites.campName}')
}
printWanttoGo(merve)


const mine = new Blogger('Mine','mineaydin@gmail.com')
mine.write('Red Tent Camping', 'Mine')
mine.write('Camp at Night', 'Mine')
mine.write('The Sun', 'Mine')

function printBlogpost(blogpost) {
    console.log('${blogpost.text} is a post by ${blogpost.blogger.name}')
}

function  printBlogpostHistory(blogger) {
    blogger.blogposts.forEach(printBlogpost)
}
printBlogpostHistory(mine)
