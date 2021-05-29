let computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  let chosen = Math.floor(Math.random() * 3);
  return options[chosen];
}

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie, try again!";
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
    return "You lose! Paper beats Rock!";
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
    return "You win! Rock beats Scissors!";
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
    return "You win! Paper beats Rock!";
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
    return "You lose! Scissors beats Paper!";
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
    return "You lose! Rock beats Scissors"
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    return "You win! Scissors beats Paper!";
  }
}

let game = () => {
  console.log("Welcome to Rock, Paper, Scissors!");
  console.log("\nYou will play up to 5 rounds against the CPU");
  console.log("to determine the winner!\n");

  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let input = prompt("Please type in 'rock', 'paper', or 'scissors':");

    let winner = playRound(input, computerPlay());

    if (winner.startsWith("You win")) {
      playerScore++;
    } else if (winner.startsWith("You lose")) {
      computerScore++;
    }

    console.log(winner);
    console.log("Current score:");
    console.log("Player     CPU");
    console.log("-------|------")
    console.log(playerScore + "      |     " + computerScore);
  }

  if (playerScore === 3) {
    console.log("You won the game!");
  } else {
    console.log("You lost! Sorry, better luck next time!");
  }
}

if (document.readyState) {
  console.log("Please press the 'Play' button to begin!");
}
