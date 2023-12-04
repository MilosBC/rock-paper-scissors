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

// Functions that deal with the logic behind the winning conditions of the game

function declareTie() {
    roundCounter.textContent = `Round ${round}`;
    gameMessage.textContent = `No one scores!`;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    }

    function increaseComputerScore() {
    roundCounter.textContent = `Round ${round}`;
    gameMessage.textContent = `Computer scores!`;
    playerScoreText.textContent = playerScore;
   computerScore++;
   computerScoreText.textContent = computerScore;
    }

    function increasePlayerScore() {
    roundCounter.textContent = `Round ${round}`;
    gameMessage.textContent = `Player scores!`;
   playerScore++;
   playerScoreText.textContent = playerScore;
   computerScoreText.textContent = computerScore;

    }

    // Generate computer selection and show the divs of both player and computer

    function startGame() {
        computerSelection = getComputerChoice();
        leftDiv.classList.remove('hidden');
        rightDiv.classList.remove('hidden');
    }

    function announceWinner() {
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
        
    }




function playRound(playerSelection, computerSelection) {


    if (playerSelection === "rock" && computerSelection === "rock") {
  
  

   playerImage.src = `rock.JPG`;
   computerImage.src = `rock.JPG`;

   declareTie();





    } else if (playerSelection == "rock" && computerSelection == "paper") {
        

  

   playerImage.src = `rock.JPG`;
   computerImage.src = `paper.JPG`;

   increaseComputerScore();

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       

   

   playerImage.src = `rock.JPG`;
   computerImage.src = `scissors.JPG`;

   increasePlayerScore();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
   

   

   playerImage.src = `paper.JPG`;
   computerImage.src = `rock.JPG`;

   increasePlayerScore();
    } else if (playerSelection === "paper" && computerSelection === "paper") {
       

  

   playerImage.src = `paper.JPG`;
   computerImage.src = `paper.JPG`;

   declareTie();


    } else if (playerSelection === "paper" && computerSelection === "scissors") {
 

   

   playerImage.src = `paper.JPG`;
   computerImage.src = `scissors.JPG`;

   increaseComputerScore();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
     

       

       playerImage.src = `scissors.JPG`;
       computerImage.src = `rock.JPG`;
    
      increaseComputerScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        

   playerImage.src = `scissors.JPG`;
   computerImage.src = `paper.JPG`;

   increasePlayerScore();
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      

       playerImage.src = `scissors.JPG`;
       computerImage.src = `scissors.JPG`;
    
       declareTie();
    }




    round++;
}



// Event handlers for the game

btnRock.addEventListener('click', function() {
    playerSelection = `rock`;
    startGame();

    playRound(playerSelection, computerSelection);

    announceWinner();
    
    
});

btnPaper.addEventListener('click', function() {
    playerSelection = `paper`;
    startGame();

    playRound(playerSelection, computerSelection);

    announceWinner();
   
    
});

btnScissors.addEventListener('click', function() {
    playerSelection = `scissors`;
    startGame();

    playRound(playerSelection, computerSelection);

    announceWinner();

    
   
});


btnPlayAgain.addEventListener('click', function() {
round = 1;
roundCounter.textContent = '';

playerScore = 0;
playerScoreText.textContent = playerScore;

computerScore = 0;
computerScoreText.textContent = computerScore;

gameMessage.textContent = '';

leftDiv.classList.add('hidden');
rightDiv.classList.add('hidden');

btnRock.classList.remove('hidden');
btnPaper.classList.remove('hidden');
btnScissors.classList.remove('hidden');
btnPlayAgain.classList.add('hidden');
});












