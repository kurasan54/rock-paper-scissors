let computerChoice = "";

function getComputerChoice(){
        let choice = Math.random() * 3;
        choice = Math.floor(choice);
    
    switch (choice){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
}

let playerChoice = "";
function getHumanChoice(){
    playerChoice = prompt("Rock, Paper or Scissors?")
}
