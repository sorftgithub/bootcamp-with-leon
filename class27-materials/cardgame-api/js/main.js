// //Plaing a game of decks

// // Load scores from localStorage if they exist, otherwise default to 0
// let player1Wins = Number(localStorage.getItem('p1Score')) || 0;
// let player2Wins = Number(localStorage.getItem('p2Score')) || 0;
// // Load the existing deckId from local storage
// let deckId = localStorage.getItem('currentDeckId');

// document.querySelector('button').addEventListener('click', playGame)

// // On iitial page load: check if we need to get a new deck
// if(!deckId){
//     startNewGame();
// }

// function startNewGame() {
//   fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//           deckId = data.deck_id;
//           localStorage.setItem('currentDeckId', deckId); //Save it immediately
//           console.log('New deck initialisd:', deckId);
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }



// function playGame(){
// // If deckId is missing for some reason, grab one and stop this execution round
//     if (!deckId) {
//         startNewGame();
//         return; 
//     }

//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//          console.log(data)

//         // The code that says the final winner and check if deck is completed
//         if (data.remaining === 0) {
//        document.querySelector('.winner').innerText = "Game Over! No cards remaining.";
//                 // Figure out final winner
//           if(player1Wins > player2Wins) {
//             document.querySelector('.winner').innerText += " Player 1 Wins the whole game!";
//              } else if(player1Wins < player2Wins) {
//              document.querySelector('.winner').innerText += " Player 2 Wins the whole game!";
//              } else {
//             document.querySelector('.winner').innerText += " It's a complete tie!";
//              }
//              return; // Stop the function execution

//              //  Clear localStorage because the deck is completely finished
//              localStorage.removeItem('currentDeckId')
//              localStorage.removeItem('p1Score')  
//              localStorage.removeItem('p2Score') 
//              // Reset variable back to the initial state for a brand new game
//              player1Wins = 0;
//              player2Wins = 0;
//              deckId = null;
//              return;
//          }

       
//         document.querySelector('#player1').src = data.cards[0].image
//         document.querySelector('#player2').src = data.cards[1].image
//         document.querySelector('h3').innerText =`Cards remaining: ${data.remaining}`

//         let player1Val = convertToNum(data.cards[0].value)
//         let player2Val = convertToNum(data.cards[1].value)
        
//         if( player1Val > player2Val ){
//           player1Wins++
//           document.querySelector('#p1Wins').innerText = `Player 1 wins, total score ${player1Wins}`
//           // Save the new score to local storage
//           localStorage.setItem('p1Score', player1Wins);
//         }else if(player1Val < player2Val){
//           player2Wins++
//           document.querySelector('#p2Wins').innerText = `Player 2 wins, total score ${player2Wins}`
//            // Save the new score to local storage
//            localStorage.setItem('p2Score', player2Wins)
//         }else{
//           document.querySelector('.winner'). innerText = "Time for War!"

//         }  
//         console.log(`P1: ${player1Wins} | P2: ${player2Wins}`);
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


 

// --- GLOBAL STATE SETUP ---
let player1Wins = Number(localStorage.getItem('p1Score')) || 0;
let player2Wins = Number(localStorage.getItem('p2Score')) || 0;
let deckId = localStorage.getItem('currentDeckId');

document.querySelector('button').addEventListener('click', playGame);

// On initial page load: Check if we need to get a deck
if (!deckId) {
    startNewGame();
}

// 1. DEDICATED FUNCTION TO FETCH A NEW DECK
function startNewGame() {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
            localStorage.setItem('currentDeckId', deckId);
            console.log("New deck initialized:", deckId);
            
            // Optional: Reset DOM elements back to default state here
            document.querySelector('.winner').innerText = "New Game Started! Draw a card.";
            document.querySelector('h3').innerText = `Cards remaining: ${data.remaining}`;
        })
        .catch(err => console.error("Error setting up new game:", err));
}

// 2. MAIN GAME LOOP
function playGame(){
    // If deckId is missing for some reason, grab one and stop this execution round
    if (!deckId) {
        startNewGame();
        return; 
    }
    
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            // CHECK IF THE DECK IS COMPLETED
            if (data.remaining === 0) {
                // ... (Keep your code here that updates DOM text images for the final two cards)
                
                // Determine Grand Winner
                let finalMessage = "Game Over! No cards remaining. ";
                if(player1Wins > player2Wins) finalMessage += "Player 1 Wins!";
                else if(player1Wins < player2Wins) finalMessage += "Player 2 Wins!";
                else finalMessage += "It's a tie!";
                
                document.querySelector('.winner').innerText = finalMessage;

                // WIPE THE COLD STORAGE
                localStorage.removeItem('currentDeckId');
                localStorage.removeItem('p1Score');
                localStorage.removeItem('p2Score');
                
                // RESET STATE FOR THE NEXT ROUND
                player1Wins = 0;
                player2Wins = 0;
                deckId = null; 

                // TRIGGER THE NEW DECK GENERATION IMMEDIATELY
                startNewGame(); 
                return;
            }

            // REGULAR GAME ROUND LOGIC
            document.querySelector('#player1').src = data.cards[0].image;
            document.querySelector('#player2').src = data.cards[1].image;
            document.querySelector('h3').innerText = `Cards remaining: ${data.remaining}`;

            let player1Val = convertToNum(data.cards[0].value);
            let player2Val = convertToNum(data.cards[1].value);

            if( player1Val > player2Val ){
                document.querySelector('.winner').innerText = "Player 1 wins this round!";
                player1Wins++;
                localStorage.setItem('p1Score', player1Wins);
            } else if( player1Val < player2Val ){
                document.querySelector('.winner').innerText = "Player 2 wins this round!";
                player2Wins++;
                localStorage.setItem('p2Score', player2Wins);
            } else {
                document.querySelector('.winner').innerText = "Time for War!";
            }
        })
        .catch(err => console.log(`error ${err}`));
}


function convertToNum(val){
  if(val === "ACE"){
    return 14
  }else if(val === "KING"){
    return 13
  }else if(val === "QUEEN"){
    return 12
  }else if(val === "JACK"){
    return 11
  }else{
    return Number(val)
  }
}