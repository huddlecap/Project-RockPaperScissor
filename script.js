
function playGame(){
    console.log("This function doesn't handle invalid choices");
    var humanScore = 0;
    var computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice() {
        const userInput = prompt("Enter your choice: rock, paper, or scissors");
        return userInput.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if(humanChoice==computerChoice){
            console.log("Draw")
        }else if(
            (humanChoice=="rock" && computerChoice=="scissors") ||
            (humanChoice=="paper" && computerChoice=="rock")||
            (humanChoice=="scissors" && computerChoice=="paper")
        ) {
            console.log("you won")
            humanScore++;
        }else{
            console.log("you lose")
            computerScore++;
        }
    }
    // calling the playRound function 5 times and declares a winner
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i}:`);
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    console.log("Final Score")
    console.log("humanscore:",humanScore);
    console.log("computerScore:",computerScore);
    if(humanScore>computerScore){
        console.log( "You won the game");
    }else if(humanScore<computerScore){
        console.log("Computer won the game");
    }else {
        console.log("its a tie");
    }
}
playGame();
