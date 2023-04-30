
let playerScore = 0;
let computerScore = 0;

console.log(`Let's play a game of rock, paper, scissors`)

function playRound() {

const playerSelection = prompt().toUpperCase(); // Zet keuze speler om naar hoofdletters

if (playerSelection == `ROCK` || playerSelection == `PAPER` || playerSelection == `SCISSORS`) { // Controlleer of speler juiste invoer gaf

        function computerChoice(arr) { // Maakt random keuze door computer

            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];
            return item;

        }

        let choices = [`ROCK`,`PAPER`,`SCISSORS`]; // Computer's keuze
        let computerSelection = computerChoice(choices);

        let gameSelection = playerSelection.toUpperCase() + computerSelection.toUpperCase()

        console.log(`You chose: ` + playerSelection.toLowerCase())
        console.log(`Computer chose: ` + computerSelection.toLowerCase())

            // Wie is de winnaar?

            if (gameSelection == `ROCKROCK` || gameSelection == `PAPERPAPER` || gameSelection == `SCISSORSSCISSORS`) { // Uitkomsten voor gelijkspel
                gameOutcome = `Draw`; 
                console.log(gameOutcome);}

            else if (gameSelection == `ROCKPAPER` || gameSelection == `PAPERSCISSORS` || gameSelection == `SCISSORSROCK`) { // Uitkomsten voor verlies
                gameOutcome = `Lose`;
                computerScore++; // score aanpassen
                console.log(gameOutcome);
                return computerScore, playerScore
            }
                
            else if (gameSelection == `PAPERROCK` || gameSelection == `SCISSORSPAPER` || gameSelection == `ROCKSCISSORS`) { // Uitkomsten voor winnen
                gameOutcome = `Win`; 
                playerScore++; // score aanpassen 
                console.log(gameOutcome);
                return computerScore, playerScore
            }
            
            // Tonen scores 

            console.log('Score is: ' + playerScore + ' - ' + computerScore)
            }

        else alert(`Please fill in either: rock, paper or scissors.`) 

}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log(`Congrats! You won.`)
    }
    else if (computerScore > playerScore) {
        console.log(`Sorry, you lost.`)
    }
    else {
        console.log("It's a draw.")
    }

    let playerScore = 0;
    let computerScore = 0;    
}