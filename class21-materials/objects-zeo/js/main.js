//Create a stopwatch object that has four properties and three methods
let stopWatch = {}
stopWatch.currentTime = 12
stopWatch.color = 'blue'
stopWatch.shape = 'diagonal'
stopWatch.screenType = 'analog'
stopWatch.brand = 'Nike'

stopWatch.satTime = function(time){
    console.log(`This is the right ${time}`)
}
stopWatch.changeColor = function(color){
    console.log(`${color} is better`)
}
stopWatch.sayBrand = function (){
    console.log( stopWatch.brand )
}