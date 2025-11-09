class RockPaperScissors{
    constructor(){
        this.humanScore = 0;
        this.computerScore = 0;
        this.resultsDiv =document.querySelector("#results");
        this.choices = ["rock", "paper", "scissors"];
        this.maxScore = 5;
        this.bindEvents();
    }

    getComputerChoice(){
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    }
    playRound(humanChoice){
        if (this.humanScore >= this.maxScore || this.computerScore >= this.maxScore) return;

        const computerChoice = this.getComputerChoice();
        let resultMessage = `You chose ${humanChoice}, computer chose ${computerChoice}. `;

        if (humanChoice === computerChoice) {
        resultMessage += "It's a draw.";
        } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
        this.humanScore++;
        resultMessage += "You win this round!";
        } else {
        this.computerScore++;
        resultMessage += "Computer wins this round!";
        }
        resultMessage += `<br>Score — You: ${this.humanScore}, Computer: ${this.computerScore}`;

        if (this.humanScore === this.maxScore || this.computerScore === this.maxScore) {
        const winner = this.humanScore === this.maxScore ? "You won the game!" : "Computer won the game!";
        resultMessage += `<br><strong>${winner}</strong>`;
        }

        this.resultsDiv.innerHTML = resultMessage;
        }
        bindEvents() {
        document.querySelector("#rock").addEventListener("click", () => this.playRound("rock"));
        document.querySelector("#paper").addEventListener("click", () => this.playRound("paper"));
        document.querySelector("#scissors").addEventListener("click", () => this.playRound("scissors"));
        }
}
// Initialize the game
const game = new RockPaperScissors();