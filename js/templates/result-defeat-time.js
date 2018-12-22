// result-time-view

import Application from '../app';


const template = `
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
`;


const resultDefeatTime = document.createElement(`section`);
resultDefeatTime.classList.add(`result`);
resultDefeatTime.innerHTML = template;

const btnReplay = resultDefeatTime.querySelector(`.result__replay`);
btnReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  Application.showGame();
});


export default resultDefeatTime;
