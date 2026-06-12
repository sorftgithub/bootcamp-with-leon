// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
    let sentence = 'what is going on?'
    alert( sentence.endsWith('?') )
    

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to 
// the console
let strOfMUltipleWord = "We are hiring for the position of jr. dev now"
console.log( strOfMUltipleWord.replaceAll('jr. dev', 'software engineer') )
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockpaperScissors(){
    let random = Math.random()
    if(random < .33){
        return "Rock"
    }else if(random < .66){
        return "Paper"
    }else{
        return "scissors"
    } 
}
console.log(rockpaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors 
// against a bot using the above function
function playWithBot(playerChoices){
    let playerChoice = playerChoices.toLowerCase()
    let botChoice = rockpaperScissors()
    if((playerChoice === "paper" && botChoice === "rock") ||
        (playerChoice === "rock" && botChoice === "scissors") ||
        (playerChoice === "scissors" && botChoice === "paper") ){
            console.log("Winnaaaaa")
    }else if(playerChoice === botChoice){
        console.log("It's a Tieeeee")
    }else{
        console.log("You loseeeeeee")
    }
}
playWithBot("rock")
playWithBot("Rock")
playWithBot("scissors")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
// Print the results of each game to the console.

function playGameXTimes(arr){
    for(let i = 0; i < arr.length; i++){
         playWithBot(arr[i])
    }
}

 console.log(playGameXTimes(['rock', 'paper', 'scissors']))