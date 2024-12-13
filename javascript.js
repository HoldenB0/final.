const cells = document.querySelectorAll(".cell");/// google help with this part 

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.innerText === "") {
            cell.innerText = "X";
        } else if (cell.innerText === "X") {
            cell.innerText = "O";
        } else {
            cell.innerText = "";
        }
    });
});

const correctWord = "PULSE"; 

function checkGuess() {
    const guess = document.getElementById("inputWord").value.toUpperCase();
    const resultDiv = document.getElementById("result");

    if (guess.length != 5) {
        resultDiv.textContent = "Enter a 5-letter word!";
        resultDiv.className = "incorrect";
        return;
    }

    if (guess == correctWord) {
        resultDiv.textContent = "Correct! You win!";
        resultDiv.className = "correct";
    } else {
        resultDiv.textContent = "Wrong! Try again.";
        resultDiv.className = "incorrect";
    }
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('result').textContent =
        `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`; //chat gpt helped with that part//
}



