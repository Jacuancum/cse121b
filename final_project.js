import {makeGuess} from "./makeGuess.js";

const words = ["computer", "program", "game", "isabella", "jacob", "joseph", "benjamin", "mormon"];

let wordToGuess;
let guessedWord;
let attempts;

function initializeGame() {
    wordToGuess = chooseRandomWord(words);
    
    guessedWord = Array(wordToGuess.length).fill("_");
    attempts = 0;
    
    updateDisplay();
}

function chooseRandomWord(wordArray) {
    
}

function updateDisplay() {
    
}

document.addEventListener();
