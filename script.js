
let player = prompt("Would you like to play a game?");
if (player == "yes") {
    alert("The game is Rock, Paper, Scissors. First to 5 wins. Let's Go!");
    game();
} else {
    alert("well now im just dissapointed");
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
        console.log('Current score: Human: ', playerScore, ' Computer: ', computerScore);
        
            
            function playRound(playerSelection, computerSelection) {
                
                if (playerSelection === 'rock' && computerSelection === 'rock' ||
                    playerSelection === 'paper' && computerSelection === 'paper' ||
                    playerSelection === 'scissors' && computerSelection === 'scissors') {
                    console.log("its a tie! youre adequate");
                } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                    computerScore += 1;
                    console.log("loser! paper beats rock. sad.");
                } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
                    playerScore += 1;
                    console.log("rock beats scissors, you win!");
                } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                    playerScore += 1;
                    console.log("paper beats rock, you win!");
                } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
                    computerScore += 1;
                    console.log("scissors beats paper- you lose and im disappointed in you.");
                } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                    computerScore += 1;
                    console.log("loser! rock beats scissors. do better next time.");
                } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
                    playerScore += 1;
                    console.log("you win! scissors beats paper!");
                } else {
                    alert("pick rock, paper, or scissors, or get out.");
                }
            }
        } if (playerScore == 5) {
            console.log("You win!");
        } if (computerScore == 5) {
            console.log("Computer wins! Better luck next time.");
        }
    }
