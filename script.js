'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🥇🥈🥉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '23';
document.querySelector('.score').textContent = '100';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.number').textContent = secretNumber;
  const message = document.querySelector('.message');
  const score = document.querySelector('.score');
  const highscoreDom = document.querySelector('.highscore');

  // When player wins
  if (!guess) {
    message.textContent = 'Wrong Number!😢';
  } else if (guess === secretNumber) {
    message.textContent = '✌🎉 You guess a  Number!';
    //document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high!📈';
      score--;
      score.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
    }

    if (score > highscore) {
      highscore = guess;
      highscoreDom.textContent = highscore;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      numberLow.textContent = 'Too low!📉';
      message.textContent = 'Too low!📉';
      score--;
      score.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
    }
  }
});

//Reload game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
