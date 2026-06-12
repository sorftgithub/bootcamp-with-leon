//--- Easy
//create a variable and assign it a number
let num = 20

//minus 10 from that number
num -=10

//print that number to the console
console.log(num)


//--- Medium
//create a variable that holds a value from the input
// let result = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
// result += 25
//alert that number
// alert(result)


//--- Hard
//create a variable that holds the h1
//add an event listener to that element that console logs the sum of the two previous variables
let clickMe = document.querySelector('h1').addEventListener('click', sum) 


function sum(){
    let result = document.querySelector('#danceDanceRevolution').value
    console.log(num + Number(result) )
}
