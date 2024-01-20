let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    num = Math.random();
    if (num < 1/3) {
        return 'rock';
    }
    else if (num < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function play(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    if (ps === computerSelection) {
        play(prompt("You tied! Replay. Rock, paper, or scissors?"), getComputerChoice);
    }
    else if (ps === 'rock') {
        if (computerSelection === 'paper') {
            alert("You lose! Paper covers rock.");
            computerScore++;
        }
        else {
            alert("You win! Rock crushes scissors.");
            playerScore++;
        }
    }
    else if (ps === 'paper') {
        if (computerSelection === 'rock') {
            alert("You win! Paper covers rock.");
            playerScore++;
        }
        else {
            alert("You lose! Scissors cut paper.");
            computerScore++;
        }
    }
    else if (computerSelection === 'rock') { 
        alert("You lose! Rock crushes scissors.");
        computerScore++;
    }
    else  {
        alert("You win! Scissors cut paper.");
        playerScore++;
    }
}

function game() {
    alert("Let's play rock, paper, scissors! It's a best-of-five.")

    let playerSelection = prompt("Rock, paper, or scissors?");
    console.log(play(playerSelection, getComputerChoice()));

    playerSelection = prompt("Rock, paper, or scissors?");
    console.log(play(playerSelection, getComputerChoice()));

    playerSelection = prompt("Rock, paper, or scissors?");
    console.log(play(playerSelection, getComputerChoice()));

    playerSelection = prompt("Rock, paper, or scissors?");
    console.log(play(playerSelection, getComputerChoice()));

    playerSelection = prompt("Rock, paper, or scissors?");
    console.log(play(playerSelection, getComputerChoice()));

    if (playerScore > computerScore) {
        alert("You win! Score: " + playerScore + "/5");
    }
    else {
        alert("You lose! :( Score: " + playerScore + "/5");
    }
}

game();