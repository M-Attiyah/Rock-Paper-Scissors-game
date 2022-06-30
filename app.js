

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
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            playRound(e.target.textContent);
        })
    })
}
playerSelection()

/**
 * Play Round
 */

const displayPlayerScore = document.querySelector('.scores .player .score');
const displayComputerScore = document.querySelector('.scores .computer .score');
const message = document.querySelector('.message p');
let computerPoints = 0;
let playerPoints = 0;

function playRound(playerSelection) {
    const computer = computerSelection();
    const player = playerSelection;

    if (computer === player) {
        message.textContent = `Tie Game ( ${player} - ${computer} )`
    }  else if (computer === 'rock' && player === 'scissors') {
        message.textContent = `You Lose, ${computer} beats ${player}`;
        displayComputerScore.textContent = ++computerPoints;
    } else if (computer === 'scissors' && player === 'paper') {
        message.textContent = `You Lose, ${computer} beats ${player}`;
        displayComputerScore.textContent = ++computerPoints;
    } else if (computer === 'paper' && player === 'rock') {
        message.textContent = `You Lose, ${computer} beats ${player}`;
        displayComputerScore.textContent = ++computerPoints;
    } else {
        message.textContent = `You Win, ${player} beats ${computer}`;
        displayPlayerScore.textContent = ++playerPoints;
    }


    const result = document.querySelector('.result');
    const resultMessage = document.querySelector('.result p');
    const playAgainButton = document.querySelector('.result button');

    if (computerPoints >= 5) {
        result.style.display = 'flex';
        resultMessage.textContent = 'You Lose The Game 😔😥'
    }

    if (playerPoints >= 5) {
        result.style.display = 'flex';
        resultMessage.textContent = 'You Win The Game 😁😀'
    }

    playAgainButton.addEventListener('click', e => {
        result.style.display = 'none';
        displayPlayerScore.textContent = '0';
        displayComputerScore.textContent = '0';
        message.textContent = 'choose one of cards';
        computerPoints = 0;
        playerPoints = 0;
    })
}


