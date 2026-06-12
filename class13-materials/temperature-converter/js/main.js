//Write your pseduo code first! 

//  0 -> 32

// need the value that is in celcius
document.querySelector("#yell").addEventListener('click', convert)

// convert from celcius to fraheinite
function convert(){
    let temp = Number(document.querySelector('#sel').value.toLowerCase())
    temp = temp * 9/5 + 32

    // show it
    document.querySelector("#placeToSee").innerText = temp
}


