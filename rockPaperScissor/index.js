console.log("Rock Paper Scissor");

let humanScore = 0;
let computerScore = 0;

function playRound () {

    function getComputerChoice () {
    let result = Math.floor(Math.random() * 3) + 1
    if (result == 1) {
        return "Scissor";
    }
    else if (result == 3) {
        return "Rock";
    }
    else {
        return "Paper";
    }
    };

    let computerChoice = getComputerChoice();

    function getHumanChoice () {
    return prompt("Lets play", "Rock")
    };

    let humanSelection = getHumanChoice();

    let humanChoice = humanSelection.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log("You lose! Rock beat Paper");
        computerScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "Scissor") {
        console.log("You lose! Scissor beat Paper");
        computerScore += 1;
    }

    else if (humanChoice == "scissor" && computerChoice == "Rock") {
        console.log("You lose! Rock beat scissor");
        computerScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("You win! Paper beat Rock");
        humanScore += 1;
    }

    else if (humanChoice == "scissor" && computerChoice == "Paper") {
        console.log("You win! Scissor beat Paper");
        humanScore += 1;
    }

    else if (humanChoice == "rock" && computerChoice == "Scissor") {
        console.log("You win! Rock beat Scissor")
        humanScore += 1;
    }

    else {
        console.log("Its a tie")
    };

};





function playGame () {
    playRound()

    console.log( "Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    playRound()

    console.log( "Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    playRound()

    console.log( "Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    playRound()

    console.log( "Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    playRound()

    console.log( "Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

};

playGame()