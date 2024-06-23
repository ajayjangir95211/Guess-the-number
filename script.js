const check = document.querySelector("button.check");
const guess = document.querySelector("input.guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const newGame = document.querySelector("button.new-game");
const body = document.querySelector("body");


check.addEventListener("click", () => {
    if (guess.value == "")
        message.textContent = "⛔️ No number";

    else if (guess.value == randomNumber) {
        message.textContent = "🎉 Correct Number";
        body.style.backgroundColor = "#60b347";

        if (score.textContent > highscore.textContent) {
            highscore.textContent = score.textContent;
        }

        guess.disabled = true;
        check.disabled = true;
    }
    else {
        score.textContent = score.textContent - 1;
        if (score.textContent == 0) {
            message.textContent = "💥 You lost the game";
            body.style.backgroundColor = "#FF272C";

            guess.disabled = true;
            check.disabled = true;
        }
        else
            message.textContent = guess.value > randomNumber ? "📉 Too high" : "📈 Too low";
    }
    guess.value = "";
})

newGame.addEventListener("click", () => {
    guess.value = "";
    score.textContent = 5;
    randomNumber = Math.floor(Math.random() * 10);
    message.textContent = "Start guessing...";
    body.style.backgroundColor = "#222";
    guess.disabled = false;
    check.disabled = false;
})