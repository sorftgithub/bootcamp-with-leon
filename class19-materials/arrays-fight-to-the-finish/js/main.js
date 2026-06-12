//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Beauty In Black', 'Last Of US', 'All Of Us Are Dead']

for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}
// movies.forEach((items, i)=>{
//     document.querySelector('h2').innerText += movies[i]
// } )

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]

// for(let i = 0; i < nums.length; i++){
//      nums[i] += 3
// }

nums.forEach((items, i)=>{
    nums[i] = items + 3
})

console.log(nums)

//Find the average of all the numbers from question three

let sum = 0

for(let i = 0; i < nums.length; i++){
    sum += nums[i]
}

// nums.forEach((item)=>{
//     sum += item
// })

console.log(sum / nums.length)
