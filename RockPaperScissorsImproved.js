     
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
      

updateScoreElem();
function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';
  if (playerMove === 'Scissors') {
    

    if (computerMove === 'Rock') {
      result = 'You Lose.' ;

    }
    else if (computerMove === 'Paper') {
      result = 'You Win.' ;

    }
    else if (computerMove === 'Scissors') {
      result = 'Tie.' ;
    }
  } else if (playerMove === 'Paper') {

      

      if (computerMove === 'Rock') {
        result = 'You Win.' ;

      }
      else if (computerMove === 'Paper') {
        result = 'Tie.' ;

      }
      else if (computerMove === 'Scissors') {
        result = 'You Lose.' ;

      }

      
        
       }
        else if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
          result = 'Tie.' ;

        }
        else if (computerMove === 'Paper') {
          result = 'You Lose.' ;

        }
        else if (computerMove === 'Scissors') {
          result = 'You Win.' ;
          
        }
    }
  
if(result === 'You Win.') {

  score.wins = score.wins + 1;
}
else if(result === 'You Lose.') {

  score.losses = score.losses + 1;
}
else if(result === 'Tie.') {

  score.ties = score.ties + 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElem();

document.querySelector('.js-result')
.innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}.png" class="move-img"> <img src="${computerMove}.png" class="move-img">  Computer `;


}

  


function updateScoreElem() {
  document.querySelector('.js-score')
 .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'Rock';
}

else if  (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'Paper';
}
else if  (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'Scissors';
}


return computerMove;
} 
  

