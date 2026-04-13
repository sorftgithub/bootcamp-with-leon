document.getElementById('check').addEventListener('click', check)

function check(){
  const day = document.querySelector("#day").value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.querySelector("#placeToSee").textContent = "It's a class day!"
  } else if (day === "saturday" || day === "sunday"){
    document.querySelector("#placeToSee").textContent = "It's weekend!"
  }else if (day === "monday" || day === "wednesday" || day === "friday"){
    document.querySelector("#placeToSee").textContent = "What a boring day!"
  }else {
    document.querySelector("#placeToSee").textContent = "Input a day of the week!"
  }
}