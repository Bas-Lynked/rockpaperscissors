let playerScore = 0
let cpuScore = 0

function resetChoices() {
    playerScore = 0
    cpuScore = 0
}

choices = ['ROCK','PAPER','SCISSORS']

function generateChoice() { // Maakt random keuze door computer

    const randomIndex = Math.floor(Math.random() * choices.length);
    const item = choices[randomIndex];
    return item;   

}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function playRound() {

    let playerChoice = prompt().toUpperCase() // Speler invoer naar hoofdletters
    
    if (choices.includes(playerChoice)) { // Controle op speler invoer

     cpuChoice = generateChoice(choices) // Genereer cpuChoice via generateChoice
     roundChoices = playerChoice + cpuChoice // Voeg cpuChoice en playerChoice samen

     console.log(`You chose: ` + playerChoice.toLowerCase() + `, Computer chose: ` + cpuChoice.toLowerCase())

     if (roundChoices == 'ROCKROCK', roundChoices == 'PAPERPAPER', roundChoices == 'SCISSORSSCISSORS') {
        cpuScore++;
        playerScore++;
     }
    
     else if (roundChoices == `ROCKPAPER` || roundChoices == `PAPERSCISSORS` || roundChoices == `SCISSORSROCK`) {
        cpuScore++;
     }

     else {
        playerScore++;
     }
     
    console.log(playerScore + ` - ` + cpuScore)

    }

    else {

    alert('Please choose either rock, paper or scissors.') // Foutmelding bij verkeerde speler invoer

    }

}

function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log (`Final score: ` + playerScore + ` - ` + cpuScore)

    if (playerScore > cpuScore) {
        console.log(`You win`)
    }
    else if (cpuScore > playerScore) {
        console.log(`You lose`)
    }
    else {
        console.log(`Draw`)
    }

    resetChoices()

}

