//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
function sumNum(arr){
    let total = arr.reduce((a,b) => a + b, 0)
    alert(total)
}

sumNum([1,2,3,4,5])

//Return a new array of numbers that is every original number squared
function squareOfOriginalArray(arr){
    let newArray = arr.map(item => item * item)
    return newArray
}
console.log(squareOfOriginalArray([1,2,3,4,5]))


//Create a function that takes string
//Print the reverse of that string to the console
function reverseOfASring(str){
    const result = str.split('').reverse().join('');
    console.log( result )
}
reverseOfASring('master')

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(str) {
  // 1. Reverse the string
  // (Split into array, reverse array, join back to string)
  const reversed = str.split('').reverse().join('');
  
  // 2. Compare original to reversed and alert the result
  if (str === reversed) {
    alert("Yes, it is a palindrome!");
  } else {
    alert("No, it is not a palindrome.");
  }
}

checkPalindrome("eye")
checkPalindrome("racecar")
checkPalindrome("master")