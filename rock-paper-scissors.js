// Get the computer's choice from one of: rock, paper, scissors

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

// Get the human's choice from one of: rock, paper, scissors

/**
 * Prompts the user for "rock", "paper", or "scissors" and returns it.
 * getHumanChoice takes no arguments.
 * @returns one of "rock", "paper", or "scissors".
 */
function getHumanChoice() {
    let choice = "";

    // do...while will continue to prompt until the user inputs a valid option
    do {
        // Immediately converts the user's answer to lowercase
        choice = prompt("Enter 'rock', 'paper', or 'scissors'.").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice))

    return choice;
}

// Determine who won the round:
// - Rock beats scissors
// - Scissors beats paper
// - Paper beats rock

/**
 * Determines who won a round of rock-paper-scissors.
 * It outputs a message explaining the outcome to the user and returns who won.
 * @param {*} humanChoice must be one of "rock", "paper", or "scissors"
 * @param {*} computerChoice must be one of "rock", "paper", or "scissors"
 * @returns one of "human", "computer", or "tie"
 */
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`)
    console.log(`The computer chose: ${computerChoice}`)

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie! Both you and the computer chose rock.")
            return "tie"
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper covers rock.")
            return "computer"
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock crushes scissors.")
            return "human"
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper covers rock.")
            return "human"
        } else if (computerChoice === "paper") {
            console.log("Tie! Both you and the computer chose paper.")
            return "tie"
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors cut paper.")
            return "computer"
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock crushes scissors.")
            return "computer"
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors cut paper.")
            return "human"
        } else if (computerChoice === "scissors") {
            console.log("Tie! Both you and the computer chose scissors.")
            return "tie"
        } else {
            throw new SyntaxError(`${computerChoice} is an invalid computerChoice!`)
        }
    } else {
        throw new SyntaxError(`${humanChoice} is an invalid humanChoice!`)
    }
}

function playGame() {
    // Initialize the score variables
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;

    // Play five rounds
    for (round = 0; round < 5; round++) {
        // Computers count from 0 but people count from 1
        console.log(`Round ${round + 1}`)

        winner = playRound(getHumanChoice(), getComputerChoice());

        // Increment the winner's (computer or human) score
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        } else if (winner === "tie") {
            ties++;
        } else {
            throw new SyntaxError(`${winner} is an invalid winner!`);
        }
    }

    console.log("After five rounds, the score is")
    console.log(`Human: ${humanScore}, Computer: ${computerScore}, Ties: ${ties}`)

    // Determine whoever won the most out of five rounds
    // and announce the winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore) {
        console.log("Too bad! The computer won!");
    } else {
        console.log("Nobody won.");
    }
}
