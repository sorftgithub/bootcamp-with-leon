//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 24
    if(age<16){
        console.log("you can not drive")
    }else if(age < 18){
        console.log("you can't hate from outside the club, because they can't even get in")
    }else if(age < 21){
        console.log("you can't drink")
    }else if(age < 25){
        console.log("you can't rent cars affordably")
    }else if(age < 30){
        console.log("you can't rent fancy cars affordably")
    } else if (age >= 30){
        console.log("there is nothing left to look forward too")
    }


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', checkAge)

function checkAge(){
    let boysAge = Number(document.querySelector('#danceDanceRevolution').value)
    if(boysAge<16){
        document.querySelector('p').innerText = " you can not drive"
    }else if(boysAge < 18){
        document.querySelector('p').innerText = " you can't hate from outside the club, because they can't even get in"
    }else if(boysAge < 21){
        document.querySelector('p').innerText = " you can't drink"
    }else if(boysAge < 25){
        document.querySelector('p').innerText = " you can't rent cars affordably"
    }else if(boysAge < 30){
        document.querySelector('p').innerText = " you can't rent fancy cars affordably"
    } else if (boysAge >= 30){
        document.querySelector('p').innerText = " there is nothing left to look forward too"
    }
}