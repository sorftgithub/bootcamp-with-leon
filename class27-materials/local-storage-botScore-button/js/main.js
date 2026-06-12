//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem("counter")){
    localStorage.setItem("counter", 0)
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let counterVal = Number(localStorage.getItem("counter"))
    counterVal += 1
    localStorage.setItem('counter', counterVal)
}

