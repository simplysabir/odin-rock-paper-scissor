let playerCount = 0;
let computerCount = 0;
for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Enter Your Choice");
  if (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") {
    playerSelection = "R";
  }
  if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") {
    playerSelection = "P";
  }
  if (playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISSOR") {
    playerSelection = "S";
  }
  let computerInput = Math.floor(Math.random() * 3);
  let computerSelection = ["R", "P", "S"][computerInput];

  function playround(computer, player) {
    if (computer == player) {
      return "Nobody Wins : its a Tie";
    }
    else if (computer == "R" && player == "P") {
      playerCount++;

      return "Player Wins : Paper Beats Rock !!";
    }
    else if (computer == "R" && player == "S") {
      computerCount++;
      return "Computer Wins : Rock Beats Scissor"
    }
    else if (computer == "P" && player == "R") {
      computerCount++;
      return "Computer Wins : Paper Beats Rock !! ";
    }
    else if (computer == "P" && player == "S") {
      playerCount++;
      return "Player Wins : Scissor Beats Paper !!";
    }
    else if (computer == "S" && player == "R") {
      playerCount++;
      return "Player Wins : Rock Beats Scissor !!";
    }
    else if (computer == "S" && player == "P") {
      computerCount++;
      return "Computer Wins : Scissor Beats Paper !!";
    }
  }

  let result = playround(computerSelection, playerSelection);
  console.log(`COMPUTER:${computerSelection} & PLAYER:${playerSelection} \n `, result);
}

if (playerCount > computerCount) {
  console.log("Overall Winner is PLAYER");
}
else if (playerCount == computerCount) {
  console.log("Overall Its a TIE")
}
else {
  console.log("Overall Winner is COMPUTER");
}