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

function playMultipleRounds() {
  let computerWins = 0;
  let playerWins = 0;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
    let playerInput = playerMove();
    let computerInput = computerMove();

    let roundWinner = playRound(computerInput, playerInput);

    if (roundWinner === 1) {
      console.log(`You won! ${playerInput} beats ${computerInput}`);
      playerWins += 1;
    } else if (roundWinner === 0) {
      console.log(`You lost.. ${computerInput} beats ${playerInput}`);
      playerWins += 1;
    } else {
      console.log(`Its a tie. You both had ${playerInput}`);
      ties += 1;

      // if its a tie redo match by decrementing loop counter
      i--;
    }
  }

  return [playerWins, computerWins, ties];
}

function matchSummary() {
  let results = playMultipleRounds();

  if (results[0] > results[1]) {
    console.log(`Congrats you won the match!
                You won ${results[0]} matches.
                Computer won ${results[1]}
                Number of ties ${results[2]}`);
  } else {
    console.log(`Sorry you lost the match.
                You won ${results[0]} matches.
                Computer won ${results[1]} matches
                Number of ties ${results[2]}`);
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
