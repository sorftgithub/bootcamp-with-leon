//Create a mouse object that has four properties and three methods
let mouse = {}
mouse.color = "Black"
mouse.shape = "rectangle"
mouse.sound = "click"
mouse.brand = "Apple"

mouse.click = function(){
    return `the mouse ${mouse.sound}`
}
mouse.scroll = function(){
    return `JUMP JUMP JUMP`
}
mouse.vibrate = function(){
    return `Vibratingggggg`
}