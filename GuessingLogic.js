let randomNumber = Math.floor(Math.random() * 100) + 1
const message = document.getElementById("message")
const guessInput = document.getElementById("guess")

function checkGuess() {
    const guess = Number(guessInput.value)
    
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = "Bitte gib eine Zahl zwischen 1 und 100 ein!"
        return;
    }

    if (guess === randomNumber) {
        message.textContent = "🎉 Glückwunsch! Du hast die Zahl erraten!"
        startConfetti();
    } else if (guess < randomNumber) {
        message.textContent = "🔻 Die Zahl ist größer!"
    } else {
        message.textContent = "🔺 Die Zahl ist kleiner!"
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1
    message.textContent = ""
    guessInput.value = ""
    stopConfetti()
}

let confetti

function startConfetti() {
    const canvas = document.getElementById("confetti-canvas")
    
    if (!confetti) {
        const confettiSettings = { target: canvas }
        confetti = new ConfettiGenerator(confettiSettings)
    }
    
    confetti.render();
}

function stopConfetti() {
    if (confetti) {
        confetti.clear()
    }
}