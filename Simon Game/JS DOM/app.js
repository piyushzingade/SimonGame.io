let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        h3.innerText = "Press any key to start the game"; // Reset the h3 text on game start
        document.body.style.backgroundColor = ""; // Reset background color
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);  // Reduced to 500ms for better timing
}

function levelup() {
    level++;
    h2.innerText = `Level: ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
    userSeq = [];  // Reset user sequence for the new level
}

function btnPress() {
    let btn = this;
    let userChosenColor = btn.classList[1];  // Get the color class
    userSeq.push(userChosenColor);
    btnFlash(btn);
    checkAnswer(userSeq.length - 1);
}

function checkAnswer(currentLevel) {
    if (gameSeq[currentLevel] === userSeq[currentLevel]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);  // Proceed to next level after a delay
        }
    } else {
        h3.innerText = `Game Over! Your score was ${level}`;
        h2.innerText = "Press Any Key to Restart";
        document.body.style.backgroundColor = "red"; // Change background color to red
        startOver();
    }
}

function startOver() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
