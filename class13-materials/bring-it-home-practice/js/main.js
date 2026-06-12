// *Variables*
// Create a variable and console log the value
let age = 10;
console.log(age);

// Create a variable, add 10 to it, and alert the value
let headCount = 10
headCount += 5
alert(headCount);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(a,b,c,d){
    const subtract = a-b-c-d;
    alert(subtract)
}
subFourNum(30, 8, 6, 4);

// Create a function that divides one number by another and returns the remainder
function getRemainder(num1, num2){
    const modulus = num1 % num2;
    return modulus
}
console.log(getRemainder(10,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addSumConditional(a, b){
    if(a + b > 50){
        alert("Jumanji")
    }else{
        alert("Too Small!")
    }
}
addSumConditional(60, 15)
addSumConditional(12, 15)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleNum(a,b,c){
    const numbers = a * b *c;
    if(numbers % 3 === 0){
        alert("ZEBRA")
    }else{
        alert("Kangaroo")
    }
}

divisibleNum(5,6,2)
divisibleNum(2,5,1)
