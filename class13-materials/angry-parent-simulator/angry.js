document.querySelector("#yell").addEventListener('click', run)

function run(){
    const fName = document.querySelector("#firstName").value
    const fMidName = document.querySelector("#firstMiddle").value
    const lMidName = document.querySelector("#lastMiddle").value
    const lName = document.querySelector("#lastName").value

    const yellAll = `${fName} ${fMidName} ${lMidName} ${lName}`

    document.querySelector("#placeToYell").innerText = yellAll
}