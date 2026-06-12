let andi = document.querySelector('#andi')
let claire = document.querySelector('#claire')
let sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', showAndy)
document.querySelector('#claireNext').addEventListener('click', showClaire)
document.querySelector('#sharleenNext').addEventListener('click', showSharleen)

function showAndy(){
    andi.classList.toggle('hidden')
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
}
function showClaire(){
    claire.classList.toggle('hidden')
    andi.classList.add('hidden')
    sharleen.classList.add('hidden')
}
function showSharleen(){
    sharleen.classList.toggle('hidden')
    claire.classList.add('hidden')
    andi.classList.add('hidden')
}