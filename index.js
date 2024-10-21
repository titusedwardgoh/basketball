let homeScore = 0
let guestScore = 0

function plusone (score) {
    score++
}

function plustwo (score) {
    score += 2
}

function plusthree (score) {
    score += 3
}

function homePlusOne () {
    plusone(homeScore)
    document.getElementById("homeScore").innerText = homeScore
}