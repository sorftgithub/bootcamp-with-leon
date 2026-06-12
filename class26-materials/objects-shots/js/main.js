//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let currentSlide = 0

document.querySelector('button').addEventListener('click', myDrink)

document.querySelector('.next-btn').addEventListener('click', () => moveCarousel(1));
document.querySelector('.prev-btn').addEventListener('click', () => moveCarousel(-1));

function myDrink(){
    let inputVal = document.querySelector('input').value.trim().toLowerCase()
     const track = document.querySelector('#drinkTrack')

 // Reset carousel position and clear track on new search
    currentSlide = 0;
    track.style.transform = `translateX(0px)`;
     track.innerHTML = ''
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.drinks)
        if (data.drinks === null) {
                track.innerHTML = `<p>No drinks found for "${inputVal}". Try another!</p>`;
                return;
    }
    data.drinks.forEach(drink=>{
        const drinkCard = document.createElement('div')
        drinkCard.className = "drink-card"
        drinkCard.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <img src = "${drink.strDrinkThumb}" alt = "A glass of ${drink.strDrink}" style = "width: 200px;">
        <div>
        <h3>Ingredients</h3>
        <div> ${drink.strIngredient1} </div>
        <div> ${drink.strIngredient2} </div>
        <div> ${drink.strIngredient3 || ''} </div>
        <div> ${drink.strIngredient4 || ''} </div>
        </div>
        `
        track.appendChild(drinkCard)

    })     
        })
.catch(err => {
    console.log(`error ${err}`);
});
    }

// Function to handle the sliding logic
function moveCarousel(direction) {
    const track = document.getElementById('drinkTrack');
    const cards = document.querySelectorAll('.drink-card');
    
    if (cards.length === 0) return; // Do nothing if there are no cards loaded

    // Update index based on direction (+1 or -1)
    currentSlide += direction;

    // Boundary checks: Don't go past the first or last slide
    if (currentSlide < 0) {
        currentSlide = 0; 
    } else if (currentSlide >= cards.length) {
        currentSlide = cards.length - 1; 
    }

    // Calculate card width + gap (matching the CSS card width of 300px + 20px gap)
    const slideWidth = 320; 
    
    // Move the track smoothly left or right
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

