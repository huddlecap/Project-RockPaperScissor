let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) return;

  const computerChoice = getComputerChoice();
  let resultMessage = `You chose ${humanChoice}, computer chose ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    resultMessage += "It's a draw.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage += "You win this round!";
  } else {
    computerScore++;
    resultMessage += "Computer wins this round!";
  }

  resultMessage += `<br>Score — You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "You won the game!" : "Computer won the game!";
    resultMessage += `<br><strong>${winner}</strong>`;
  }

  resultsDiv.innerHTML = resultMessage;
}

// Attach event listeners using querySelector
document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));
