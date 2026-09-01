// ==============================
// HERO RATING
// ==============================

function rateHero(rating) {

    document.getElementById("rating-result").innerText =
        "You rated Iron Man " + rating + " ⭐";

}



// ==============================
// HERO VOTING
// ==============================

let ironVotes = 0;
let thorVotes = 0;
let lokiVotes = 0;


function vote(hero) {

    if (hero === "iron") {

        ironVotes++;

        document.getElementById("ironVotes").innerText =
            ironVotes;

    }

    else if (hero === "thor") {

        thorVotes++;

        document.getElementById("thorVotes").innerText =
            thorVotes;

    }

    else if (hero === "loki") {

        lokiVotes++;

        document.getElementById("lokiVotes").innerText =
            lokiVotes;

    }

}



// ==============================
// NUMBER GUESSING GAME
// ==============================

let secretNumber =
    Math.floor(Math.random() * 10) + 1;


function checkGuess() {

    let guess =
        Number(document.getElementById("guess").value);

    let result =
        document.getElementById("game-result");


    if (guess > secretNumber) {

        result.innerText =
            "Too High! ⬆️";

    }

    else if (guess < secretNumber) {

        result.innerText =
            "Too Low! ⬇️";

    }

    else {

        result.innerText =
            "You defeated Thanos! 💥";

    }

}



// ==============================
// DIGITAL CLOCK
// ==============================

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds;

}


setInterval(updateClock, 1000);

updateClock();



// ==============================
// DARK / LIGHT THEME
// ==============================

function changeTheme() {

    document.body.classList.toggle("light-mode");

}



// ==============================
// MOUSE EVENT
// ==============================

function powerOn() {

    document.getElementById("power-text").innerText =
        "⚡ POWER ACTIVATED ⚡";

}


function powerOff() {

    document.getElementById("power-text").innerText =
        "Move your mouse here";

}



// ==============================
// DOM HERO CREATOR
// ==============================

function addHero() {

    let heroName =
        document.getElementById("newHero").value;

    if (heroName === "") {

        alert("Please enter a hero name!");

        return;

    }


    let hero =
        document.createElement("p");

    hero.innerText =
        "🦸 " + heroName;


    document.getElementById("heroList")
        .appendChild(hero);


    document.getElementById("newHero").value = "";

}