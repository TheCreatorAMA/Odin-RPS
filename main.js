const possibleMoves = ['rock', 'paper', 'scissors'];
let playerMove = '';
let computerMove = '';
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.game-button');
const playerMoveText = document.querySelector('#human-move');
const computerMoveText = document.querySelector('#computer-move');
const playerScoreLabel = document.querySelector('#human-score');
const computerScoreLabel = document.querySelector('#computer-score');
const scores = document.querySelectorAll('.score');
const roundMessage = document.querySelector('#round-message');

scores.forEach((score) => {
  score.addEventListener('change', (e) => {
    console.log('score changed');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerMove = e.target.id;
    computerMove = getComputerMove();

    playerMoveText.textContent = `${playerMove}`;
    computerMoveText.textContent = `${computerMove}`;
    let message = determineWinner(playRound(computerMove, playerMove));

    roundMessage.textContent =
      computerScore === 5 ? 'Computer Won The Game!' : playerScore === 5 ? 'You Won The Game!' : message;
  });
});

function getComputerMove() {
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playRound(computerInput, playerInput) {
  // If user wins return 1 if computer wins return 0 and if tie return -1
  if (playerInput == 'rock') {
    if (computerInput == 'paper') {
      return 0;
    } else if (computerInput == 'scissors') {
      return 1;
    } else {
      return -1;
    }
  } else if (playerInput == 'paper') {
    if (computerInput == 'scissors') {
      return 0;
    } else if (computerInput == 'rock') {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (computerInput == 'rock') {
      return 0;
    } else if (computerInput == 'paper') {
      return 1;
    } else {
      return -1;
    }
  }
}

function determineWinner(value) {
  if (value === 0) {
    computerScore++;
    computerScoreLabel.textContent = `${computerScore}`;
    return 'Computer Won this round.';
  } else if (value === 1) {
    playerScore++;
    playerScoreLabel.textContent = `${playerScore}`;
    return 'You Won this Round';
  } else {
    return 'Tie';
  }
}

// matchSummary();

// Rock beats scissors
// Paper beats rock
// Scissors beats paper

// Plan:
// get user input and check if its valid
//  - can only be rock paper or scissors
// get computer move
// compare who wins
// output to user winner
