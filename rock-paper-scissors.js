// Get the computer's choice from one of: rock, paper, scissors

/**
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

// Increment the winner's (computer or human) score

// Start another round

// Play five rounds

// Determine whoever won the most out of five rounds

// Announce the winner
