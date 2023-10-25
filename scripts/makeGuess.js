export function makeGuess(letter) {
    if (guessedWord.join("") === hiddenWord) {
        return;
    }

    const letterIndex = hiddenWord.indexOf(letter);
    if (letterIndex === -1) {
        attempts++;
        updateDisplay();
    } else {
        while (letterIndex !== -1) {
            guessedWord[letterIndex] = letter;
            letterIndex = hiddenWord.indexOf(letter, letterIndex + 1);
        }
    }

    updateDisplay();
    document.getElementById("letter_input").value = "";
    if (guessedWord.join("") === hiddenWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word.";
    }
}