
console.log(`Welcome to Rock Paper Scissors! You have only 5 chances to beat the computer, good luck!`);

let round = 1;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // I will use Math.random() function to generate random numbers between 0 and 3. If the number is greater than 0 and less than or equal to 1 - the function returns "rock". If the number is greater than 1 and less than or equal to 2 - the function returns "paper". Lastly, if the number is greater than 2 and less than or equal to 3 - the function returns "scissors".

    const generateRandomNumber = Math.random()*3;
    

    if (generateRandomNumber > 0 && generateRandomNumber <= 1) {
      
       return "rock";
    } else if (generateRandomNumber > 1 && generateRandomNumber <= 2) {
        
        return "paper";
    } else if (generateRandomNumber > 2 && generateRandomNumber <= 3) {
        
        return "scissors";
    }


} 


//declaration of player's choice" 
let playerSelection;

//declaration of player's choice" 
let computerSelection;

//the logic for playing a single round of the game

function playRound(playerSelection, computerSelection) {

   
if (playerSelection == "rock" && computerSelection == "rock") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 

    Player score: ${playerScore}
    Computer score: ${computerScore}`)
} else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 

    Player score: ${playerScore}
    Computer score: ${++computerScore}`)
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 

    Player score: ${++playerScore}
    Computer score: ${computerScore}`)
} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 

    Player score: ${++playerScore}
    Computer score: ${computerScore}`)
} else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 

    Player score: ${playerScore}
    Computer score: ${computerScore}`)
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 

    Player score: ${playerScore}
    Computer score: ${++computerScore}`) } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 
    
        Player score: ${playerScore}
        Computer score: ${++computerScore}`)
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 

    Player score: ${++playerScore}
    Computer score: ${computerScore}`) } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 

        Player score: ${playerScore}
        Computer score: ${computerScore}`) }

        round++;
}



// the function that lets us play the game exactly five times

function game() {

 for (let i = 0; i<=4; i++) {
    playerSelection = prompt("Rock, paper or scissors - what do you choose?").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
 }

    if (playerScore > computerScore) {
        console.log(`You are the winner!
        
        Final score
        
        Player score: ${playerScore}
        Computer score: ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Computer is the winner!
        
        Final score
        
        Player score: ${playerScore}
        Computer score: ${computerScore}`)
    } else {
        console.log(`Tie, no winner!
        
        Final score
        
        Player score: ${playerScore}
        Computer score: ${computerScore}`)
    }
}

game();




