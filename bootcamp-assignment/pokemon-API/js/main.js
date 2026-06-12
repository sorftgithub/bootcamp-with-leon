// Creating something nice with the pokemon APIs

fetch("https://rickandmortyapi.com/api/character")
// fetch("https://pokeapi.co/api/v2/characteristic/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.results[4])
      document.querySelector('img').src = data.results[4].image
      document.querySelector('#dLink').href = data.results[4].episode[1]
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
//     .catch(err => {
//     console.error(err); // This will print the exact reason (e.g., "TypeError: fetch is not a function" or "ERR_INTERNET_DISCONNECTED")
// });