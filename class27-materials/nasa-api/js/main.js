//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
    const choice = document.querySelector('input').value
    //   console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=MDXOvwrhrrJIaNGYzG7dqdOA6teoBNUefQPg2HuW&date=${choice}`
  
    // document.querySelector('img').src = '';
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        const imageElement = document.querySelector('img')
        const iframeElement = document.querySelector('iframe')
        console.log(data)
        if(data.media_type === 'image'){
            imageElement.style.display = "block"
            imageElement.src = data.hdurl
            // Hide the video frame
            iframeElement.style.display = "none"
            iframeElement.src = '';
        }else if(data.media_type === 'video'){
            iframeElement.style.display = "block"
            iframeElement.src = data.url
            // hide the image frame
            imageElement.style.display = "none"
            imageElement.src = ''
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// My NASA api demo key   MDXOvwrhrrJIaNGYzG7dqdOA6teoBNUefQPg2HuW
