import {makeGuess} from "./makeGuess.js";

const words = ["computer", "program", "game", "javascript", "jacob", "joseph", "benjamin", "mormon"];

let hiddenWord;
let guessedWord;
let attempts;

//Define the variables hiddenWord, guessWord and attempts value. Then show the Display.
function theGame() {
    hiddenWord = chooseRandomWord(words);
    guessedWord = Array(hiddenWord.length).fill("_");
    attempts = 0;
    Display();
}

//Call the function chooseRandomWord() to get a randomWord then return.
function chooseRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    const randomWord = wordArray[randomIndex];
    return randomWord;
}

//Put the related value into the id form HTML.
function Display() {
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
