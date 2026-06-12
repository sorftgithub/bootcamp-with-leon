// *Variables*
// Declare a variable, assign it a value, and alert the value
let age = 20
alert(age)

// Create a variable, divide it by 10, and console log the value
let kids = 50
kids = kids / 10
console.log(kids)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function threeProduct(a,b,c){
    alert(a*b*c)
}
threeProduct(2,5,8)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. 
// Console log the result
function firsttwoLastTwo(a,b,c,d){
    console.log((a+b)+(c-d))
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, 
// subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNotFour(a,b,c){
    let starter = 100
    if((starter + a - b / c) > 25){
        console.log("WE HAVE A WINNA")
    }
}
threeNotFour(20,10,2)


// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day".
//  Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function tellWhatDay(day){
//     let dayOfWeek = day.toLowerCase();
//     if(dayOfWeek === "saturday" || dayOfWeek === "sunday" ){
//         alert('Weekend')
//     }else if(dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "thursday" 
//         || dayOfWeek === "Friday"){
//             alert("week day")
//     }else{
//         alert("Try Again!")
//     }
// }
// tellWhatDay("monday")
// tellWhatDay("saturday")
// tellWhatDay("January")

function tellWhichDay(day){
    const dayOfWeek = day.toLowerCase()
    const weekend = ['saturday', 'sunday']
    const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']


    if(weekend.includes(dayOfWeek)){
        alert("It's weeked!")
    }else if(weekday.includes(dayOfWeek)){
        alert("It's weekday")
    }else{
        alert('Try Again')
    }
}
    tellWhichDay("monday")
    tellWhichDay("saturday")
    tellWhichDay("January")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater,
//  but count by 3
function countBy3(){
    let num = 10
    for(let i=1; i<=num; i+=3){
        console.log(i)
    }
}
countBy3()