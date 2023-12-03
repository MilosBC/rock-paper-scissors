'use strict';

let round = 1;
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');
let roundCounter = document.querySelector('.round-counter');

const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const btnPlayAgain = document.querySelector('.play-again');

let playerImage = document.querySelector('.player-image');
let computerImage = document.querySelector('.computer-image');


let gameMessage = document.querySelector('.game-message');

const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');








function getComputerChoice() {
    
    const generateRandomNumber = Math.trunc(Math.random() * 3) + 1;

    if (generateRandomNumber === 1) {


        return "rock";
    } else if (generateRandomNumber === 2) {


        return "paper";
    } else if (generateRandomNumber === 3) {


        return "scissors";
    }








}



function playRound(playerSelection, computerSelection) {


    if (playerSelection === "rock" && computerSelection === "rock") {
        /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 😑

   Player score: ${playerScore}
   Computer score: ${computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `rock.JPG`
   computerImage.src = `rock.JPG`;

   gameMessage.textContent = `No one scores!`;

   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;





    } else if (playerSelection == "rock" && computerSelection == "paper") {
        /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 😱




   Player score: ${playerScore}
   Computer score: ${++computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `rock.JPG`
   computerImage.src = `paper.JPG`;

   gameMessage.textContent = `Computer scores!`;

   playerScoreText.textContent = playerScore;
   ++computerScore;
   computerScoreText.textContent = computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 😄




   Player score: ${++playerScore}
   Computer score: ${computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `rock.JPG`
   computerImage.src = `scissors.JPG`;

   gameMessage.textContent = `Player scores!`;
   ++playerScore;
   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
         /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 😄




   Player score: ${++playerScore}
   Computer score: ${computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `paper.JPG`
   computerImage.src = `rock.JPG`;

   gameMessage.textContent = `Player scores!`;
   ++playerScore;
   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
       /* console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 😑




   Player score: ${playerScore}
   Computer score: ${computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `paper.JPG`
   computerImage.src = `paper.JPG`;

   gameMessage.textContent = `No one scores!`;

   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;


    } else if (playerSelection === "paper" && computerSelection === "scissors") {
       /* console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 😱




   Player score: ${playerScore}
   Computer score: ${++computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `paper.JPG`
   computerImage.src = `scissors.JPG`;

   gameMessage.textContent = `Computer scores!`;

   playerScoreText.textContent = playerScore;
   ++computerScore;
   computerScoreText.textContent = computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...computer scores! 😱
 
       Player score: ${playerScore}
       Computer score: ${++computerScore}`) */

       roundCounter.textContent = `Round ${round}`

       playerImage.src = `scissors.JPG`
       computerImage.src = `rock.JPG`;
    
       gameMessage.textContent = `Computer scores!`;
    
       playerScoreText.textContent = playerScore;
       ++computerScore;
       computerScoreText.textContent = computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        /*console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...you score! 😄




   Player score: ${++playerScore}
   Computer score: ${computerScore}`) */

   roundCounter.textContent = `Round ${round}`

   playerImage.src = `scissors.JPG`
   computerImage.src = `paper.JPG`;

   gameMessage.textContent = `Player scores!`;
   ++playerScore;
   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
       /* console.log(`Round ${round}: Player chooses ${playerSelection}, computer chooses ${computerSelection}...no one scores! 😑




       Player score: ${playerScore}
       Computer score: ${computerScore}`) */

       roundCounter.textContent = `Round ${round}`

       playerImage.src = `scissors.JPG`
       computerImage.src = `scissors.JPG`;
    
       gameMessage.textContent = `No one scores!`;
    
       playerScoreText.textContent = playerScore;
       computerScoreText.textContent = computerScore;
    }




    round++;
}

















/*function game() {




   
       
       

        playRound(playerSelection, computerSelection);

    


    }





    if (playerScore > computerScore) {
        roundCounter.textContent = `Round ${round}`
        playerImage.src = `trophy.png`
        computerImage.src = 'crying.png'
        gameMessage.textContent = `Player wins the game!`;
    
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    } else if (playerScore < computerScore) {
        roundCounter.textContent = `Round ${round}`
        playerImage.src = `crying.png`
        computerImage.src = 'trophy.png'
        gameMessage.textContent = `Computer wins the game!`;
    
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    }
    
    btnPlayAgain.classList.remove('hidden'); */


// Event handlers for the game

btnRock.addEventListener('click', function() {
    playerSelection = `rock`;
    computerSelection = getComputerChoice();
    leftDiv.classList.remove('hidden');
    rightDiv.classList.remove('hidden');

    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        playerImage.src = `trophy.png`
        computerImage.src = 'crying.png'
        gameMessage.textContent = `Player wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');
    } else if (computerScore === 5) {
        playerImage.src = `crying.png`
        computerImage.src = 'trophy.png'
        gameMessage.textContent = `Computer wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');

    }
    
    
});

btnPaper.addEventListener('click', function() {
    playerSelection = `paper`;
    computerSelection = getComputerChoice();
    leftDiv.classList.remove('hidden');
    rightDiv.classList.remove('hidden');

    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        playerImage.src = `trophy.png`
        computerImage.src = 'crying.png'
        gameMessage.textContent = `Player wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');
    } else if (computerScore === 5) {
        playerImage.src = `crying.png`
        computerImage.src = 'trophy.png'
        gameMessage.textContent = `Computer wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');

    }
   
    
});

btnScissors.addEventListener('click', function() {
    playerSelection = `scissors`;
    computerSelection = getComputerChoice();
    leftDiv.classList.remove('hidden');
    rightDiv.classList.remove('hidden');

    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        playerImage.src = `trophy.png`
        computerImage.src = 'crying.png'
        gameMessage.textContent = `Player wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');
    } else if (computerScore === 5) {
        playerImage.src = `crying.png`
        computerImage.src = 'trophy.png'
        gameMessage.textContent = `Computer wins the game!`;
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissors.classList.add('hidden');
        btnPlayAgain.classList.remove('hidden');

    }

    
   
});















