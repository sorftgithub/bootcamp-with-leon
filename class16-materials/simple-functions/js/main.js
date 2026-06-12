//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num1, num2){
    let subtract = num1 - num2
    alert(subtract)
}

//create a function that divides three numbers and console logs the quotient
function divideThree(a, b, c){
    let divide = a/b/c
    console.log(divide)
}

//create a function that multiplys three numbers and returns the product
function multiplyThree(a,b,c){
    return a*b*c
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return 
// the remainder of dividing the sum of the first two numbers by the third number
function addAndDivide(zebra, lion, yam){
    let animal = zebra + lion
    return animal / yam
}
console.log(addAndDivide(9,5,2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the 
// fourth number
function multiplyAndAddFour(a,b,c,d){
    let firstMultiply = a*b;
    if(firstMultiply > 100){
        console.log(c+d)
    }else if(firstMultiply < 100){
        console.log(c-d)
    }else if(firstMultiply = 100){
        console.log((a*b*c)%d)
    }
}

multiplyAndAddFour(50,30,40,10)
multiplyAndAddFour(5,8,40,10)
multiplyAndAddFour(20,5,40,15)