
let player = prompt("Would you like to play a game?");

// One round
if (player == "yes") {
    alert("you have chosen death");
    
    const myArray = ['rock', 'paper', 'scissors'];
    function computerPlay() {
        return myArray[Math.floor(Math.random()*myArray.length)];
    }
    
    const computerSelection = computerPlay();
    const playerSelection = prompt("rock, paper, or scissors?");
    
    function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === 'rock' && computerSelection === 'rock' ||
            playerSelection === 'paper' && computerSelection === 'paper' ||
            playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "its a tie! youre adequate";
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "loser! paper beats rock. sad.";
        } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
            return "rock beats scissors, you win!";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "paper beats rock, you win!";
        } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            return "scissors beats paper- you lose and im disappointed in you.";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "loser! rock beats scissors. do better next time.";
        } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            return "you win! scissors beats paper!";
        } else {
            return "pick rock, paper, or scissors, or get out.";
        }
    }
    alert(playRound(playerSelection, computerSelection));
} else {
    alert("well now im just disappointed");
}

