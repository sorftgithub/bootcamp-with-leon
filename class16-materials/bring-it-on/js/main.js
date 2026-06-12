// *Variables*
// Create a variable and console log the value
let players = 5
console.log(players)

// Create a variable, add 10 to it, and alert the value
let nurses = 18
nurses += 10
alert(nurses)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNum(a,b,c,d){
    alert(a-b-c-d)
}
subtractFourNum(10,8,5,2)

// Create a function that divides one number by another and returns the remainder
function divideByAnother(a,b){
    return a % b
}
console.log(divideByAnother(15,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoGreatNum(zebra, camel){
    if((zebra + camel)> 50){
        alert("Jumanji!")
    }
}
addTwoGreatNum(35,46)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleByThree(a,b,c){
    if((a*b*c)%3 === 0){
        alert("Zebra")
    }
}
divisibleByThree(2,5,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times 
// where x was the number passed in
function wordNum(word, num){
    for(let i=1; i<=num; i++){
        console.log(word)
    }
}
wordNum("hello", 25)
