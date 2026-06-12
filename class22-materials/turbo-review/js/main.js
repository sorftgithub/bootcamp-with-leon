// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either 
// side of the string, and print the value to the console
let favDrink = " coke "
console.log(favDrink.trim())


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWord = "mango pear apple melon"
let hasApple = multipleWord.toLowerCase().includes("apple")
console.log(hasApple)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPaperScissors(){
//     let random = Math.random()
//     if(random < .33){
//         return "rock"
//     }else if(random < 0.66){
//         return "paper"
//     }else{
//         return "scissors"
//     }
// }

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock 
// paper scissors against a bot using the above function
// function playWithBot(playerChoice){
//     let botChoice = rockpaperScissors()
//     let player = playerChoice.toLowerCase()

//      if((player === "rock" && botChoice === "scissors") ||
//             (player === "paper" && botChoice === "rock") || 
//             (player === "scissors" && botChoice === "paper")){
//         console.log(`You won! ${player} beats ${botChoice}`)
//     }else if(player === botChoie){
//         console.log("It's a tie")
//     }else{
//        console.log(`You Lost! ${botChoice} beats ${player}`) 
//     }
// }

// playWithBot("rock")

function rockPaperScissorsBot() {
    let random = Math.random();
    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(playerChoice) {
    // 1. Get the bot's choice
    const botChoice = rockPaperScissorsBot();
    const player = playerChoice.toLowerCase();

    // 2. Check for a tie
    if (player === botChoice) {
        return `It's a tie! You both chose ${player}.`;
    }

    // 3. Check for Win/Loss conditions
    if (
        (player === "rock" && botChoice === "scissors") ||
        (player === "paper" && botChoice === "rock") ||
        (player === "scissors" && botChoice === "paper")
    ) {
        return `You win! ${player} beats ${botChoice}.`;
    } else {
        return `You lose! ${botChoice} beats ${player}.`;
    }
}

// Example usage:
// console.log(playGame("rock"));


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices 
// in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach(choice => playGame(choice))
}
console.log(playGameXTimes(["rock","paper","scissors"]))