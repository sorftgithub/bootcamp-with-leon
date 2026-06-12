// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let quickQuestion = true
alert(quickQuestion)

// Declare a variable, reassign it to your favorite color, and console log the value
let bestColor = "black"
bestColor = "blue"
console.log(bestColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. 
// Return the result. Call the function.
function fourNum(n1,n2,n3,n4){
    return (n1+n2+n3) / n4
}
console.log(fourNum(5,6,7,8))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second.
//  Call the function.
function twoNum(a,b){
    // console.log(Math.pow(a,b))
    let result = 1
    for(let i = 0; i < b; i++){
        console.log (result *= a)
    }
}
twoNum(4,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. 
// If the boolean is false, console log the string
function bulStr(b,str){
    if(b){
        alert(str)
    }else{
        console.log(str)
    }
}
bulStr(true, "welcome")
bulStr(false, "leave now!")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number,but if the number is 
// divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log
//  "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 5=== 0 && i % 3 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('fizz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(20)