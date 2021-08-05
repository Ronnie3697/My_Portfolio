'use strict';

/**********
 * Selecting and Manipulating Elements
 */
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/**********
 * Handling Click Events + Implementing the Game Logic
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (messageClass) {
  document.querySelector('.message').textContent = messageClass;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Zkouska, ze je input cislo a ne string
  //   console.log(guess, typeof guess);

  // When there is now input
  if (!guess) {
    displayMessage('NO number!');
    // document.querySelector('.message').textContent = 'No number';
  }
  // When the player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number');
    // document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When the input is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      //   document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You just lost the game');
      //   document.querySelector('.message').textContent = 'You just lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   // When the input is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You just lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // When the input is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You just lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

/**********
 * CODING CHALLENGE 1 - Button Again
 */

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
