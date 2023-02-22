let homeCount = 0
let guestCount = 0
let homeEl = document.getElementById("home-counter")
let guestEl = document.getElementById("guest-counter")

function inc1H() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function inc2H() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function inc3H() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function inc1G() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function inc2G() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function inc3G() {
    guestCount += 3
    guestEl.textContent = guestCount
}