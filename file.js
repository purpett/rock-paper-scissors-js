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

function game() {
    let i = 0
    let playerPoints = 0
    let computerPoints = 0
    while (i < 5) {
        let playerSelection = userPlay()
        let computerSelection = computerPlay()
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 0) {
            alert("It's a tie")
        } else if (roundResult == 1) {
            playerPoints += 1
            alert(`Player chooses ${playerSelection}, Computer chooses ${computerSelection}. Player wins.`)
        } else if (roundResult == 2) {
            computerPoints += 1
            alert(`Player chooses ${playerSelection}, Computer chooses ${computerSelection}. Computer wins.`)
        } else {
            alert("Invalid selection")
        }
        i += 1
    }
    alert(`Player: ${playerPoints}, Computer: ${computerPoints}`)
    if (playerPoints > computerPoints) {
        alert("Player wins")
    } else if (playerPoints < computerPoints) {
        alert("Computer wins")
    } else {
        alert("It's a tie")
    }
}

game();