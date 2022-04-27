const possibleMoves = ['rock', 'paper', 'scissors'];

function computerMove() {
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playerMove() {
  const input = prompt('Rock, Paper or Scissors: ').toLowerCase();

  if ([possibleMoves.includes(input)]) {
    return input;
  } else {
    alert('Invalid move, must be Rock, Paper or Scissors');
    return;
  }
}

// Rock beats scissors
// Paper beats rock
// Scissors beats paper

// Plan:
// get user input and check if its valid
//  - can only be rock paper or scissors
// get computer move
// compare who wins
// output to user winner
