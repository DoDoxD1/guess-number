'use strict';

//dom

const message = document.querySelector('.message');
const scoreField = document.querySelector('.score');
let highScore = 0;
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;
  scoreField.textContent = score;
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score != 0) {
    if (!guess) {
      message.textContent = '⛔No  Number';
    } else if (guess == secNumber) {
      message.textContent = '🎉Correct Number';
      document.querySelector('.number').textContent = secNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess > secNumber) {
      score--;
      if (score == 0) {
        message.textContent = '💥You loose';
      } else {
        message.textContent = 'Too High📈';
      }
      scoreField.textContent = score;
    } else if (guess < secNumber) {
      score--;
      if (score == 0) {
        message.textContent = '💥You loose';
      } else {
        message.textContent = 'Too Low📉';
      }
      scoreField.textContent = score;
    }
  }
});
