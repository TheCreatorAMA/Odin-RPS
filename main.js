function computerMove() {
  let possibleMoves = ['Rock', 'Paper', 'Scissors'];

  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

// Rock beats scissors
// Paper beats rock
// Scissors beats paper
