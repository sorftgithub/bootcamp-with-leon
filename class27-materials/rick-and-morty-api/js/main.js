//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const countryName = document.querySelector('input').value.trim().toLowerCase();

  // if (!countryName) {
  //       alert("Please type a country name first!");
  //       return; 
  //   }

  // const url = `https://restcountries.com/v3.1/name/${countryName}`;
 const url = "https://api.restcountries.com/countries/v5?api-key=rc_live_demo"


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



//  My REST countries api   rc_live_f5734d5a3b714483b4018ab047ccff9d