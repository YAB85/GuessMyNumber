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

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (scoreBtn) {
  document.querySelector('.score').textContent = scoreBtn;
};

const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

const highScore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.number').textContent = secretNumber;

  /* const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  }; */

  /* const message = document.querySelector('.message'); */

  if (guess === secretNumber) {
    displayMessage('✌🎉 You guess a  Number!');
    //document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
    // When player wins
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }

  /* message.textContent = 'Wrong Number!😢';
  } else if (guess === secretNumber) {
    message.textContent = '✌🎉 You guess a  Number!';
    //document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > highscore) {
      highscore = guess;
      highScore.textContent = highscore;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      numberLow.textContent = message.textContent = 'Too low!📉';
      score--;
      scoreBtn.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreBtn.textContent = 0;
    }
  } */
});

//Reload game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
