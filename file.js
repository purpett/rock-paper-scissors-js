function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    let choice = getRandomInt(3);
    if (choice == 0) {
        return("Rock")
    } else if (choice == 1) {
        return("Paper")
    } else {
        return("Scissors")
    }
    
}


function userPlay() {
    let playerChoice = prompt("Insert your choice here:")
    return playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection == "Rock" && computerSelection == "Rock") {
        return 0
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return 2
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return 1
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return 0
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return 2
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return 1
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return 0
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return 2
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return 1
    } else {
        return null
    }
} 

const playerBox = document.querySelector(".player.score");
const computerBox = document.querySelector(".computer.score");


let playerPoints = 0
let computerPoints = 0
let results = document.querySelector('#displayResults');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let choice = e.currentTarget.dataset.choice
        let computerSelection = computerPlay()
        let roundResult = playRound(choice, computerSelection)
        if (roundResult == 0) {
            results.textContent= `Tie.`
        } else if (roundResult == 1) {
            playerPoints += 1
            results.textContent= `${choice} vs ${computerSelection}`
        } else if (roundResult == 2) {
            computerPoints += 1
            results.textContent= `${choice} vs ${computerSelection}`
        } else {
            results.textContent= "Invalid selection"
        }        
        playerBox.textContent = playerPoints;
        computerBox.textContent = computerPoints;

        if (playerPoints == 5 || computerPoints == 5) {
            if (playerPoints > computerPoints) {
                results.innerHTML += `<div>The winner is: Player!</div>`
            } else {
                results.innerHTML += "<div>The winner is: Computer!</div>"
            } 
            playerPoints = 0
            computerPoints = 0
        }
    });
});
