// Begin with computerPlay
const computerMoves = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let result = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    return result;
}
// One round 


console.log(playRound(playerSelection, computerSelection));