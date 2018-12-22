// result-lives-view

import Application from '../app';


const template = `
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
`;


const resultDefeatLives = document.createElement(`section`);
resultDefeatLives.classList.add(`result`);
resultDefeatLives.innerHTML = template;

const btnReplay = resultDefeatLives.querySelector(`.result__replay`);
btnReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  Application.showGame();
});


export default resultDefeatLives;
