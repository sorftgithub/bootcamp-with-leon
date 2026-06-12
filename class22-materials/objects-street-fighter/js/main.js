//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(jab, shoot, punch, kick){
    this.jab = jab
    this.shoot = shoot
    this.punch = punch
    this.kick = kick

    this.smackDown = function(){
        return `Bend the neck and ${this.punch}`
    }
    this.sniperShot = function(){
        return `Lay on the ground, position the sniper and ${this.shoot}`
    }
}

let jamesBond = new StreetFighter("uppercut", "ak-47", "fastPunch", "kickToTheKneel")

StreetFighter.prototype.finishing = `wrath in Hellllll!!!`
