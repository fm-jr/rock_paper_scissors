
let player = prompt("Would you like to play a game?");
if (player == "yes") {
    alert("The game is Rock, Paper, Scissors. First to 5 wins. Let's Go!");
    game();
} else {
    alert("Well, now I'm just disappointed.");
}



function game() {
    let playerScore = 0;
    let computerScore = 0;


    while (playerScore < 5 && computerScore < 5) {
        const myArray = ['rock', 'paper', 'scissors'];
            function computerPlay() {
                return myArray[Math.floor(Math.random()*myArray.length)];
            }


        const computerSelection = computerPlay();
        const playerSelection = prompt("rock, paper, or scissors?");
        playRound(playerSelection, computerSelection);
        console.log('Current score: Player: ', playerScore, ' Computer: ', computerScore);
        
            
            function playRound(playerSelection, computerSelection) {
                computerSelection = computerPlay().toLowerCase();
                playerSelection = playerSelection.toLowerCase();
                
                if (playerSelection == computerSelection) {
                    console.log("Looks like a tie. Try again!");
                } else if (playerSelection == 'rock' && computerSelection === 'paper') {
                    computerScore += 1;
                    console.log("Paper beats rock! The computer wins this one.");
                } else if(playerSelection == 'rock' && computerSelection === 'scissors') {
                    playerScore += 1;
                    console.log("Rock beats scissors. Good job!");
                } else if (playerSelection == 'paper' && computerSelection === 'rock') {
                    playerScore += 1;
                    console.log("Paper beats rock. You win this round!");
                } else if(playerSelection == 'paper' && computerSelection === 'scissors') {
                    computerScore += 1;
                    console.log("Scissors beats paper! The computer is on a roll...");
                } else if (playerSelection == 'scissors' && computerSelection === 'rock') {
                    computerScore += 1;
                    console.log("Rock beats scissors, try again!");
                } else if(playerSelection == 'scissors' && computerSelection === 'paper') {
                    playerScore += 1;
                    console.log("Great job! Scissors beats paper!");
                } else {
                    alert("I thought we decided that you would choose rock, paper, or scissors?");
                }
            }
        } if (playerScore == 5) {
            console.log("You win!");
        } if (computerScore == 5) {
            console.log("Computer wins! Better luck next time.");
        }
    }
