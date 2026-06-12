document.querySelector('#yell').addEventListener('click', convert)

function convert(){
    let temp = Number(document.querySelector('#sel').value)
    temp = (temp * 9/5) + 32

    document.querySelector('#placeToSee').innerText = temp
}