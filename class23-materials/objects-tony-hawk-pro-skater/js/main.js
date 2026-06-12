//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function GameCharacter(skaterName, skaterCostume, skaterBoards, skaterAge){
    this.name = skaterName
    this.costume = skaterCostume
    this.boards = skaterBoards
    this.age = skaterAge
    this.skills = function(){
        console.log("Twist and Jumpppp")
    }
    this.sound = function(){
        console.log("skrrrrrrr")
    }
}

let TonyHawk = new GameCharacter("Tony", "JumpSuit", 4, 27)
let Bartister = new GameCharacter("Bartister", "Pants",2, 42)