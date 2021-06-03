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

let game = (results) => {

  const playerScoreNode = document.querySelector('#playerScore');
  const computerScoreNode = document.querySelector('#computerScore');
  const roundMessage = document.querySelector('#roundMessage');
  const winMessage = document.querySelector('#winMessage');
  
  let playerScore = playerScoreNode.textContent;
  let computerScore = computerScoreNode.textContent;
  
  if (results.startsWith("You win")) {
    playerScore++ ;
  } else if (results.startsWith("You lose")) {
    computerScore++;
  }
  
  roundMessage.textContent = results;
  
  if (playerScore === 3) {
    winMessage.textContent = "You won the game!";
  } else if (computerScore === 3) {
    winMessage.textContent = "You lost! Sorry, better luck next time!";
  }
}

if (document.readyState === "complete") {
  const btnRock = document.querySelector('#rock');
  const btnPaper = document.querySelector('#paper');
  const btnScissors = document.querySelector('#scissors');
  const btnReset = document.querySelector('#reset');
  
  btnRock.addEventListener('click', () => {
    game(playRound("rock", computerPlay()));
  });
  
  btnPaper.addEventListener('click', () => {
    game(playRound("paper", computerPlay()));
  });
  
  btnScissors.addEventListener('click', () => {
    game(playRound("scissors", computerPlay()));
  });
  
  btnReset.addEventListener('click', () => {
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    const roundMessage = document.querySelector('#roundMessage');
    const winMessage = document.querySelector('#winMessage');
    
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundMessage.textContent = '';
    winMessage.textContent = '';
  });
}
