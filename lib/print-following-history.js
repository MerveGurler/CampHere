const colors = require('colors')

function printFollowingHistory(camper) {
    camper.followedCampers.forEach(followedCampers =>
    console.log(`${colors.yellow(camper.name)} is following ${colors.bgRed.white(followedCampers.name)}.`))
}

module.exports = printFollowingHistory