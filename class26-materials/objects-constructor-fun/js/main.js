// Build a counstructor that has four properties and three mehods

function MakePizza(shape, division, toppings, brand ){
    this.pizzaShape = shape
    this.pizzaDivision = division
    this.pizzaTopigs = toppings
    this.pizzaBrand = brand
    this.pizzaNutrient = function(){
        console.log("Best form  of protein")
    }
    this.pizzaEstimatedDelTime = function(){
        console.log("calculatingggg")
    }
    this.pizzaMood = function(){
    console.log("makes you full and good sleep")
}
}

let DominosPizza = new MakePizza("round", 10, ["onions", "spinach"],"Dominos")
let papajohnsPizza = new MakePizza("round", 12, ["onions", "crust"],"papjohns")