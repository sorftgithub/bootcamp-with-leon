
document.querySelector("#purple").addEventListener("click", partyPurple)
document.querySelector("#green").addEventListener("click", partyGreen)
document.querySelector("#blue").addEventListener("click", partyBlue)
document.querySelector("#red").addEventListener("click", partyRed)

function partyPurple(){
    document.querySelector("body").style.backgroundColor = 'rgba(241,63,247,1)';
    document.querySelector('body').style.color = 'white';
}
function partyGreen(){
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color = "white";
}
function partyBlue(){
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('body').style.color = 'white';
}
function partyRed(){
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('body').style.color = 'white';
}