// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to 
// the console
let bestHoliday = 'Olumo Rock'
bestHoliday = 'Erinjesa Water Fall'
bestHoliday = bestHoliday.toUpperCase()
console.log(bestHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and 
// the MDN)
let lastThreeLetters = "rangers"
alert (lastThreeLetters.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference.
//  Call the function.
function fiveNum(a,b,c,d,e){
    alert(100-(a+b+c+d+e))
}
fiveNum(20,8,9,5,4)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highLow(a,b,c){
    let min = Math.min(a,b,c)
    let max = Math.max(a,b,c)
    console.log(`the lowest number is ${min} and the highst num is ${max}`)
}

highLow(30,16,8)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTail(){
    let result = Math.random
    if(result < 0.5){
        return "heads"
    } else{
        return "tails"
    }
}

console.log( headOrTail() )



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous 
// function x times where x is the number passed into the function. Call the function.
function loopHeadOrTail(num){
    for(let i = 1; i <= num; i++){
        let show = headOrTail()
        console.log(show)
    }
}

loopHeadOrTail(10)