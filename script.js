
console.log(`Welcome to Rock Paper Scissors! You have only 5 chances to beat the computer, good luck!`);

let round = 0;
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

//assignment of player's choice to the variable "player's choice" 
const playerChoice = prompt("Rock, paper or scissors - what do you choose?");

//assignment of computer's choice to the variable "computerChoice" 
const computerChoice = getComputerChoice();




