const possibleMoves = ['rock', 'paper', 'scissors'];

function computerMove() {
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playerMove() {
  const input = prompt('Rock, Paper or Scissors: ').toLowerCase();

  if (possibleMoves.includes(input)) {
    return input;
  } else {
    alert('Invalid move, must be Rock, Paper or Scissors');
    return;
  }
}

function playRound(computerInput, playerInput) {
  if (playerInput == 'rock') {
    if (computerInput == 'paper') {
      return 'Paper beats Rock! You lost';
    } else if (computerInput == 'scissors') {
      return 'You won! Rock beats Scissors';
    } else {
      return 'You both had Rock, its a tie';
    }
  } else if (playerInput == 'paper') {
    if (computerInput == 'scissors') {
      return 'Scissors beats Paper! You lost';
    } else if (computerInput == 'rock') {
      return 'You won! Paper beats Rock';
    } else {
      return 'You both had Paper, its a tie';
    }
  } else {
    if (computerInput == 'rock') {
      return 'Rock beats Scissors! You lost';
    } else if (computerInput == 'paper') {
      return 'You won! Scissors beats Paper';
    } else {
      return 'You both had Scissors, its a tie';
    }
  }
}

let playerInput = playerMove();
let computerInput = computerMove();

console.log(computerInput + ' ' + playerInput);
console.log(playRound(computerInput, playerInput));

// Rock beats scissors
// Paper beats rock
// Scissors beats paper

// Plan:
// get user input and check if its valid
//  - can only be rock paper or scissors
// get computer move
// compare who wins
// output to user winner
