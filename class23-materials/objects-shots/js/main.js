//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector("button").addEventListener('click', myDrink )

// function myDrink() {
//   let inputVal = document.querySelector("input").value.trim();
  
//   // 1. Split the input string by spaces into an array of drinks
//   // The regex /\s+/ handles accidental double spaces safely!
//   let drinksArray = inputVal.split(/\s+/); 

//   // 2. Loop over each drink in the array
//   drinksArray.forEach(drink => {
    
//     // 3. Fire a fetch request for the current drink in the loop
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//       .then(res => res.json())
//       .then(data => {

//         // Inside your .then(data => { ... }) block:
//     if (data.drinks) {
//     const drinkData = data.drinks[1];
//     const container = document.getElementById("drinks-container");

//     // Create a wrapper card for this specific drink
//     const drinkCard = document.createElement("div");
//     drinkCard.className = "drink-card";

//     // Build the structure dynamically
//     drinkCard.innerHTML = `
//         <h2>${drinkData.strDrink}</h2>
//         <img src="${drinkData.strDrinkThumb}" alt="${drinkData.strDrink}" style="width:200px;">
//         <h3>Instructions:</h3>
//         <p>${drinkData.strInstructions}</p>
//         <ul>
//         <h3>Ingredients:</h3>
//         <li>${drinkData.strIngredient1 || ''}</li>
//         <li>${drinkData.strIngredient2 || ''}</li>
//         <li>${drinkData.strIngredient3 || ''}</li>
//         </ul>
//         <hr>
//     `;

//     // Shove this brand new card into your container container!
//     container.appendChild(drinkCard);
//     }

//       })
//       .catch(err => {
//         console.log(`error ${err}`);
//       });

//   });
// }

// let currentSlide = 0;

// document.getElementById('next').addEventListener('click', () => {
//     const container = document.getElementById('drinks-container');
//     const totalDrinks = container.children.length;
    
//     if (currentSlide < totalDrinks - 1) {
//         currentSlide++;
//         updateCarousel();
//     }
// });

// document.getElementById('prev').addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateCarousel();
//     }
// });

// function updateCarousel() {
//     const container = document.getElementById('drinks-container');
//     // Move the container to the left based on the slide index
//     container.style.transform = `translateX(-${currentSlide * 300}px)`;
// }

document.querySelector('button').addEventListener('click', processMultipleDrinks);

function processMultipleDrinks() {
    const inputVal = document.querySelector('input').value.trim().toLowerCase();
    const masterContainer = document.getElementById('masterCarouselContainer');
    
    // Clear everything out on a new search
    masterContainer.innerHTML = ''; 

    if (!inputVal) return;

    // Split the input by one or more spaces to create an array of search terms
    const drinkQueries = inputVal.split(/\s+/);

    // Loop through each drink query inputted (e.g., ["mojito", "margarita"])
    drinkQueries.forEach((query, sectionIndex) => {
        
        // 1. Create a unique wrapper container for this specific search term
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'drink-section-wrapper';
        sectionWrapper.innerHTML = `
            <h2 class="section-title">Results for: "${query.toUpperCase()}"</h2>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev-btn">❮</button>
                <div class="carousel-track" id="track-${sectionIndex}" data-current-slide="0"></div>
                <button class="carousel-btn next-btn">❯</button>
            </div>
        `;
        
        masterContainer.appendChild(sectionWrapper);
        const track = document.getElementById(`track-${sectionIndex}`);

        // 2. Fetch data specifically for this query
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => {
                if (data.drinks === null) {
                    track.innerHTML = `<p class="no-results">No matches found for "${query}"</p>`;
                    // Hide buttons if there are no results to scroll through
                    sectionWrapper.querySelectorAll('.carousel-btn').forEach(btn => btn.style.display = 'none');
                    return;
                }

                // 3. Build individual drink cards inside this track
                data.drinks.forEach(drink => {
                    const drinkCard = document.createElement('div');
                    drinkCard.className = "drink-card";
                    drinkCard.innerHTML = `
                        <h3>${drink.strDrink}</h3>
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        <ul>
                            ${drink.strIngredient1 ? `<li>${drink.strIngredient1}</li>` : ''}
                            ${drink.strIngredient2 ? `<li>${drink.strIngredient2}</li>` : ''}
                            ${drink.strIngredient3 ? `<li>${drink.strIngredient3}</li>` : ''}
                        </ul>
                    `;
                    track.appendChild(drinkCard);
                });
            })
            .catch(err => console.error(`Error fetching ${query}:`, err));

        // 4. Attach independent slider functionality to this section's buttons
        const prevBtn = sectionWrapper.querySelector('.prev-btn');
        const nextBtn = sectionWrapper.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => moveTrack(track, -1));
        nextBtn.addEventListener('click', () => moveTrack(track, 1));
    });
}

// Global function to slide a specific track left or right
function moveTrack(track, direction) {
    const cards = track.querySelectorAll('.drink-card');
    if (cards.length === 0) return;

    // Pull the current slide index stored directly on the HTML element data attribute
    let currentSlide = parseInt(track.getAttribute('data-current-slide')) || 0;

    currentSlide += direction;

    // Boundaries
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= cards.length) {
        currentSlide = cards.length - 1;
    }

    // Save the new position back to the element attribute
    track.setAttribute('data-current-slide', currentSlide);

    // Calculate shifting (Card width 260px + 20px gap = 280px)
    const slideWidth = 280; 
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}