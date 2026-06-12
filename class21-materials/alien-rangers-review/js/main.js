//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['GOT','House of Dragon','Vampire Diaries']
// for(let i = 0; i < tvShows.length; i++){
//     console.log(tvShows[i])
// }
tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums =[1,2,3,4,5,6]
let onlyEvens = arr => arr.filter(n => n % 2 === 0)
// function onlyEvens(arr){
//     return arr.filter(n => n % 2 === 0)
// }
console.log(onlyEvens(nums))
console.log(onlyEvens([2,3,4,5,6,37,83,19,40]))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function lowAndHigh(arr){
    let sorted = arr.sort((a,b)=> a-b)
   alert( sorted[1] + sorted[sorted.length -2]) 
}
lowAndHigh([2,3,1,5,4,7,10])