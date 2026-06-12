const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach((Element) => Element.addEventListener('click', andiRose))

function andiRose(click){
    if (click.target.classList.contains('rose')){
        document.querySelector('#nikki').classList.toggle('hidden')
    }else{
        alert('Wrong!')
    }
}