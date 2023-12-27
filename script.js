'use strict';
// document.querySelector(`.message`).textContent = `nigaaa`;
// document.querySelector(`.guess`).textContent = `21`;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    document.querySelector(`.message`).textContent = `No nombre! 🦔`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `✅Correct Number!`;
    document.querySelector(`body`).style.background = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(`.highscore`).textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😿 Yoy lost`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😿 Yoy lost`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
// CODING CHALLENGE 1!1 1️⃣
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.background = `#222`;
  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.message`).textContent = `Start guessing...`;
});
