//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNum = [1,2,3,4,5]
alert( arrNum.reduce((x,y) => x + y,0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrOfNum(arr){
    return arr.map(arr => arr*arr)
}
console.log( arrOfNum([2,3,4,6,7]) )


//Create a function that takes string
//Print the reverse of that string to the console
let takeSring = (strs) => strs.split("").reverse().join("")

console.log(takeSring("Harry"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str){
    let lowerStr = str.toLowerCase()
    return lowerStr === takeSring(lowerStr)
}

alert(palindrome("racecar"))
alert(palindrome("Human"))