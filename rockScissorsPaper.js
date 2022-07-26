const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceButton");
let player = 0;
let computer = 0;
let newChoise = choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

 function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}

let playerScore = 0;
let computerScore = 0;
let drawScore  = 0;

function checkWinner(){
  if(player === computer){ 
    setScoreDraw(drawScore + 1);
    return "DRAW!";
  }
  
  if (player == "PAPER" && computer == "SCISSORS") {
    setScoreComputer(computerScore + 1);
    return "YOU LOSE!";
  }
  
  if (player == "PAPER" && computer == "ROCK") {
    setScore(playerScore + 1);
    return "YOU WIN!";
  }
  
 if (player == "PAPER" && computer == "PAPER") {
  setScoreDraw(drawScore + 1);
    return  "DRAW!";
  }
  
  if  (player == "ROCK" && computer == "SCISSORS") {
    setScore(playerScore + 1);
    return  "YOU WIN!";
  }
  
   if  (player == "ROCK" && computer == "PAPER") {
    setScoreComputer(computerScore + 1);
    return "YOU LOSE!";
  }
  
   if (player == "ROCK" && computer == "ROCK") {
    setScoreDraw(drawScore + 1);
    return "DRAW!";
  }
  
  if  (player == "SCISSORS" && computer == "SCISSORS") {
    setScoreDraw(drawScore + 1);
    return "DRAW!";
  }
  
  if  (player == "SCISSORS" && computer == "ROCK") {
    setScoreComputer(computerScore + 1);
    return "YOU LOSE!";
  }
  
   if (player == "SCISSORS" && computer == "PAPER") {
    setScore(playerScore + 1);
    return  "YOU WIN!";
  }
}

let setScore = (newScore) => {
  playerScore = newScore;
  document.querySelector(".score h1").innerText = newScore;
};

let setScoreComputer = (newScore) => {
  computerScore = newScore;
  document.querySelector(".score1 h1").innerText = newScore;
};

let setScoreDraw = (newScore) => {
  drawScore = newScore;
  document.querySelector(".score2 h1").innerText = newScore;
};




