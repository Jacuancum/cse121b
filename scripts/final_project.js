import {makeGuess} from "./makeGuess.js";

const words = ["computer", "program", "game", "javascript", "jacob", "joseph", "benjamin", "mormon"];

let hiddenWord;
let guessedWord;
let attempts;

function theGame() {
    hiddenWord = chooseRandomWord(words);
    guessedWord = Array(hiddenWord.length).fill("_");
    attempts = 0;
    updateDisplay();
}

function chooseRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    const randomWord = wordArray[randomIndex];
    return randomWord;
}

function updateDisplay() {
    document.getElementById("word_display").textContent = guessedWord.join(" ");
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
}

document.addEventListener("DOMContentLoaded", () => {
    theGame();
    document.getElementById("guess_button").addEventListener("click", () => {
        const letter = document.getElementById("letter_input").value;
        makeGuess(letter);
    });
});
