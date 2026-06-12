// Creating something nice with Various APIs


//  The rapidkey-api 









fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.results[4])
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
//     .catch(err => {
//     console.error(err); // This will print the exact reason (e.g., "TypeError: fetch is not a function" or "ERR_INTERNET_DISCONNECTED")
// });