/**
 * Randomly returns "rock", "paper", or "scissors".
 * getComputerchoice takes no arguments.
 * @returns one of "rock", "paper", or "scissors".
 */
function getComputerChoice() {
    // Generates a random number between 0 and 2 inclusive then returns rock,
    // paper, or scissors based on that number.
    const choiceOfThree = Math.floor(Math.random() * 3);
    switch (choiceOfThree) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/**
 * Determines who won a round of rock-paper-scissors.
 * It increments the human or computer score as appropriate.
 * @param {*} event 
 */
function playRound(event) {
    human = document.getElementById("human");
    humanScore = Number.parseInt(human.textContent);

    computer = document.getElementById("computer");
    computerScore = Number.parseInt(computer.textContent);

    output = document.getElementById("output");
    output.replaceChildren(); // Clear previous output 

    humanChoice = event.target.id;
    li = document.createElement("li");
    li.textContent = `You chose: ${humanChoice}`;
    output.appendChild(li);

    computerChoice = getComputerChoice();
    li = document.createElement("li");
    li.textContent = `The computer chose: ${computerChoice}`;
    output.appendChild(li);

    li = document.createElement("li");
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            li.textContent = "Tie! Both you and the computer chose rock."
        } else if (computerChoice === "paper") {
            li.textContent = "You lose! Paper covers rock."
            computerScore++;
        } else if (computerChoice === "scissors") {
            li.textContent = "You win! Rock crushes scissors."
            humanScore++;
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            li.textContent = "You win! Paper covers rock."
            humanScore++;
        } else if (computerChoice === "paper") {
            li.textContent = "Tie! Both you and the computer chose paper."
        } else if (computerChoice === "scissors") {
            li.textContent = "You lose! Scissors cut paper."
            computerScore++;
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            li.textContent = "You lose! Rock crushes scissors."
            computerScore++;
        } else if (computerChoice === "paper") {
            li.textContent = "You win! Scissors cut paper."
            humanScore++;
        } else if (computerChoice === "scissors") {
            li.textContent = "Tie! Both you and the computer chose scissors."
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else {
        throw new SyntaxError(`${humanChoice} is an invalid humanChoice!`)
    }

    output.appendChild(li);
    human.textContent = humanScore;
    computer.textContent = computerScore;
}

// 
const choices = document.querySelectorAll(".choice");
for (const choice of choices) {
    choice.addEventListener("click", playRound);
}

