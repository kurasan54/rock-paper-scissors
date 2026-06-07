let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let computerChoiceID;

function getComputerChoice(){
        let choice = Math.random() * 3;
        choice = Math.floor(choice);
    
    switch (choice){
        case 0:
            computerChoice = "rock";
            computerChoiceID = 0;
            break;
        case 1:
            computerChoice = "paper";
            computerChoiceID = 1;
            break;
        case 2:
            computerChoice = "scissors";
            computerChoiceID = 2;
            break;
    }
}

let playerChoice = "";
let playerChoiceID;
function getHumanChoice(){
    playerChoice = prompt("Rock, Paper or Scissors?")
    playerChoice = playerChoice.toLowerCase();

    switch (playerChoice){
        case "rock":
            playerChoiceID = 0;
            break;
        case "paper":
            playerChoiceID = 1;
            break;
        case "scissors":
            playerChoiceID = 2;
            break;
    }
}

getHumanChoice();