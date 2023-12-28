const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hangmanImage = gameModal.querySelector("img");

let currentQuestion, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentQuestion.word
        .split("")
        .map((char) => `<li class="letter"></li>`)
        .join("");
    keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
    gameModal.classList.remove("show");
    hangmanImage.src = "";
};

const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * verbalQuestions.length);
    currentQuestion = verbalQuestions[randomIndex];
    document.querySelector(".hint-text b").innerText = currentQuestion.hint;
    resetGame();
};

const gameOver = (isVictory) => {
    const modalText = isVictory ? "You found the word:" : "The correct word was:";
    const gifSource = isVictory ? "victory.gif" : "sad.gif";
    hangmanImage.src = `images/${gifSource}`;
    gameModal.querySelector("h4").innerText = isVictory ? "Congrats! You Win" : "Game Over! Better Luck Next Time";
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentQuestion.word}</b>`;
    gameModal.classList.add("show");
};

const initGame = (clickedKey) => {
    if (/[a-z]/.test(clickedKey)) {
        if (currentQuestion.word.includes(clickedKey)) {
            [...currentQuestion.word].forEach((char, index) => {
                if (char === clickedKey) {
                    correctLetters.push(char);
                    wordDisplay.querySelectorAll("li")[index].innerText = char;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        } else {
            wrongGuessCount++;
        }
        keyboardDiv.querySelector(`button[data-key="${clickedKey}"]`).disabled = true;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

        if (wrongGuessCount === maxGuesses) return gameOver(false);
        if (correctLetters.length === currentQuestion.word.length) return gameOver(true);
    }
};

// Create letter buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    const letter = String.fromCharCode(i);
    button.innerText = letter;
    button.setAttribute("data-key", letter);
    keyboardDiv.appendChild(button);

    button.addEventListener("click", () => {
        if (!button.disabled) {
            initGame(letter);
            button.disabled = true;
            button.classList.add("clicked");
        }
    });
}

// Handle keydown event
document.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toLowerCase();
    if (/[a-z]/.test(pressedKey)) {
        initGame(pressedKey);
    }
});

// Initial setup
getRandomQuestion();
playAgainBtn.addEventListener("click", getRandomQuestion);

