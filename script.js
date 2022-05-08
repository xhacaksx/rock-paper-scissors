function computerPlay() {
    let computer = ["rock","paper", "scissors"];
    return computer[Math.floor(Math.random()*computer.length)];
}
let userWinCount=0;
let compWinCount=0;
let gameCount=0;
//console.log(computerPlay());
function playRound(playerSelection,computerSelection) {
    
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()) {
        gameCount++;
    
        console.log("Match Drawn!");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection=="paper") {
        gameCount++;
        compWinCount++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection=="scissors") {
        gameCount++;
        userWinCount++;
        console.log( `You Won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection=="rock") {
        gameCount++;
        userWinCount++;
        console.log( `You Won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection=="scissors") {
        gameCount++;
        compWinCount++;
        console.log( `You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection=="paper") {
        gameCount++;
        userWinCount++;
        console.log( `You Won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection=="rock") {
        gameCount++;
        compWinCount++;
        console.log( `You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}
//const playerSelection ="rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection,computerSelection));
function game() {
    for(let i=0;i<5;i++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    }
    console.log(`You won ${userWinCount} times`);
    console.log(`Computer won ${compWinCount} times`);
    console.log(`Total games ${gameCount} times`);

}
game();