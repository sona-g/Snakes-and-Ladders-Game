
 import "./style.css";
 import $ from "jquery"

 

 //CREATE GAME BOARD GRID
const gameBoard = (numberOfSquares) => {
     $('#container').empty()
     for(let i = numberOfSquares; i > 0; i--) {
          const $square = $("<div class='grid'></div>")
           $square.text(i)
           $('#container').append($square);
           if(i === currentPosition) {
           $square.addClass("player-position")
           } 
         
 } };
 

//ROLLING OF THE DICE
let diceResult; 
let currentPosition = 1

const rollTheDice = () => {
     $('img').addClass('shake');
     diceResult = Math.ceil(Math.random()* 6);
     setTimeout(() => {
          $('img').removeClass('shake');
         $('img').attr('src', `images/dice${diceResult}.png`); 
     }, 1000); 
      changedPosition();
 };

 // CHANGE POSITION - CONDITIONAL

 const changedPosition = () => {
     currentPosition += diceResult;

      if (currentPosition === 100) {
           alert("You Won!")
           currentPosition = 1;
      } else if(currentPosition > 100) {
           alert("You Lost!")
           currentPosition = 1;
      }
      else if (currentPosition === 17) {
          alert("oh oh! The snake just bit you")
           currentPosition = 4; 
      } else if (currentPosition === 22) {
          alert("oh oh! The snake just bit you")
           currentPosition = 11;
      } else if (currentPosition === 54) {
          alert("oh oh! The snake just bit you")
          currentPosition = 34;
     } else if (currentPosition === 67) {
          alert("oh oh! The snake just bit you")
          currentPosition = 48;
     } else if (currentPosition === 69) {
          alert("oh oh! The snake just bit you")
          currentPosition = 19;
     } else if (currentPosition === 84) {
          alert("oh oh! The snake just bit you")
          currentPosition = 27;
     } else if (currentPosition === 93) {
          alert("oh oh! The snake just bit you")
          currentPosition = 73;
     } else if (currentPosition === 95) {
          alert("oh oh! The snake just bit you")
          currentPosition = 75;
     } else if (currentPosition === 99) {
          alert("oh oh! The snake just bit you")
          currentPosition = 78;
     } else if (currentPosition === 2) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 31;
     } else if (currentPosition === 7) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 14;
     } else if (currentPosition === 9) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 18;
     } else if (currentPosition === 13) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 24;
     } else if (currentPosition === 20) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 38;
     } else if (currentPosition === 23) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 87;
     } else if (currentPosition === 40) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 59;
     } else if (currentPosition === 51) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 64;
     } else if (currentPosition === 68) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 90;
     } else if (currentPosition === 71) {
          alert("Yay! You climbed up the ladder")
          currentPosition = 91;
     } 
     console.log(currentPosition);
     gameBoard(100);
     }
  
 const main = () => {
     gameBoard(100);
     $('button').on('click',rollTheDice);
 }
 $(main);