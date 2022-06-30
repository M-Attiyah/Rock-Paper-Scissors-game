

/**
 * Computer Selection
 */

function computerSelection() {
    const selections = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}


/**
 * Player Selection
 */

function playerSelection() {
    const enterSelection = prompt('Enter selection');
    const lowerCase = enterSelection.toLowerCase();
    if (lowerCase === 'rock' || lowerCase === 'paper' || lowerCase === 'scissors') {
        return lowerCase;
    } else {
        console.log('Your selection must be only (rock, paper, scissors)');
    }
}

/**
 * Play Round
 */

let computerPoints = 0;
let playerPoints = 0;

function playRound() {
    const computer = computerSelection();
    const player = playerSelection();

    if (computer === player) {
        console.log('Tie');
    }  else if (computer === 'rock' && player === 'scissors') {
        console.log(`You Lose, ${computer} beats ${player}`);
        ++computerPoints;
    } else if (computer === 'scissors' && player === 'paper') {
        console.log(`You Lose, ${computer} beats ${player}`);
        ++computerPoints;
    } else if (computer === 'paper' && player === 'rock') {
        console.log(`You Lose, ${computer} beats ${player}`);
        ++computerPoints;
    } else {
        console.log(`You Win, ${player} beats ${computer}`);
        ++playerPoints;
    }
}


/**
 * Game
 */

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();

        // final round 
        if (i === 5) {
            if (playerPoints > computerPoints) {
                console.log(`Whooohooo, You Win The Game`);
                console.log(`You: ${playerPoints} vs Com: ${computerPoints}`);
            } else {
                console.log('oh sorry, You Lose The Game');
            }
        }
    }
}

