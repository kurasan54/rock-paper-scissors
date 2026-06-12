let playerScore = 0;
let computerScore = 0;

let computerChoice = "";
let computerChoiceID;

const container = document.querySelector("#container");
const rButton = document.createElement("button");
const pButton = document.createElement("button");
const sButton = document.createElement("button");

rButton.textContent = "Rock";
pButton.textContent = "Paper";
sButton.textContent = "Scissors";
container.appendChild(rButton);
container.appendChild(pButton);
container.appendChild(sButton);

rButton.addEventListener("click", () => getHumanChoice("rock"));
pButton.addEventListener("click", () => getHumanChoice("paper"));
sButton.addEventListener("click", () => getHumanChoice("scissors"));

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

let playerChoiceName = "";
let playerChoiceID;
function getHumanChoice(playerChoice){
    //Old Prompt Code
    // playerChoice = prompt("Rock, Paper or Scissors?")
    // playerChoice = playerChoice.toLowerCase();

    switch (playerChoice){
        case "rock":
            playerChoiceID = 0;
            playerChoiceName = "rock";
            break;
        case "paper":
            playerChoiceID = 1;
            playerChoiceName = "paper";
            break;
        case "scissors":
            playerChoiceName = "scissors";
            playerChoiceID = 2;
            break;
    }

    playRound();
}

let whoWonMessage = "";
let messageID = -1;
function playRound(){
    //Since we are using buttons, we dont need to use this function in playRound;
    // getHumanChoice();
    getComputerChoice();

    // 0 = tie
    // 1 = player wins
    // 2 = computer wins

    //First Input is Player | Second Input is Computer
    //Rock & Rock || Paper & Paper || Scissors & Scissors - Neither Wins
    if ((playerChoiceID === 0 && computerChoiceID === 0) || (playerChoiceID === 1 && computerChoiceID === 1) || (playerChoiceID === 2 && computerChoiceID === 2) )
    {
        messageID = 0;
    }

    //Rock & Paper || Paper & Scissors || Scissors & Rock- Player Loses
    if ((playerChoiceID === 0 && computerChoiceID === 1) || (playerChoiceID === 1 && computerChoiceID === 2) || (playerChoiceID === 2 && computerChoiceID === 0) )
    {
        messageID = 2;
        computerScore++;
    }

    //Rock & Scissors || Paper & Rock || Scissors & Paper - Player Wins
    if ((playerChoiceID === 0 && computerChoiceID === 2) || (playerChoiceID === 1 && computerChoiceID === 0) || (playerChoiceID === 2 && computerChoiceID === 1))
    {
        messageID = 1;
        playerScore++;
    }

    displayWinner();
}

let roundCounter = 0;

function displayWinner(){
    let playerMessage = playerChoiceName.charAt(0).toUpperCase() + playerChoiceName.slice(1);
    let computerMessage = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    // 0 = tie
    // 1 = player wins
    // 2 = computer wins
    switch (messageID){
        case 0:
            console.log("It's a tie!");
            break;
        case 1:
            console.log("You win! " + playerMessage + " beats " + computerMessage + "!");
            break;
        case 2:
            console.log("You lose! " + computerMessage + " beats " + playerMessage + "!");
    }

    if (roundCounter >= 4)
    {
        if (playerScore > computerScore){
        console.log("You Win The Game!");
        }
        else if (playerScore === computerScore){
        console.log("It's a TIE!");
        }
        else{
        console.log("You Lost The Game!");
        }
    }  
    else{
        roundCounter++;
    } 
}

function playGame(){

    //5 Rounds Logic
    // for (let i = 0; i < 5; i++){
    //     playRound();
    //     console.log("Player score: " + playerScore + "  Computer Score: " + computerScore);
    // }

    if (playerScore > computerScore){
        console.log("You Win The Game!");
    }
    else if (playerScore === computerScore){
        console.log("It's a TIE!");
    }
    else{
        console.log("You Lost The Game!");
    }
}
