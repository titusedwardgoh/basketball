let homeScore = 0;
let guestScore = 0;

function homePlusOneRecord () {
    homeScore++
    document.getElementById("homeScore").innerText = homeScore   
}

function homePlusTwoRecord () {
    homeScore += 2
    document.getElementById("homeScore").innerText = homeScore   
}

function homePlusThreeRecord () {
    homeScore += 3
    document.getElementById("homeScore").innerText = homeScore   
}

function guestPlusOneRecord () {
    guestScore++
    document.getElementById("guestScore").innerText = guestScore   
}

function guestPlusTwoRecord () {
    guestScore += 2
    document.getElementById("guestScore").innerText = guestScore   
}

function guestPlusThreeRecord () {
    guestScore += 3
    document.getElementById("guestScore").innerText = guestScore   
}