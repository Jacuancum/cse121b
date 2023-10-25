export function makeGuess(letter) {
    if (guessedWord.join("") === hiddenWord) {
        return;
    }

    let letterIndex = hiddenWord.indexOf(letter);
    if (letterIndex === -1) {
        attempts++;
        Display();
    } else {
        while (letterIndex !== -1) {
            guessedWord[letterIndex] = letter;
            letterIndex = hiddenWord.indexOf(letter, letterIndex + 1);
        }
    }

    Display();
    document.getElementById("letter_input").value = "";
    if (guessedWord.join("") === hiddenWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word.";
    }
}