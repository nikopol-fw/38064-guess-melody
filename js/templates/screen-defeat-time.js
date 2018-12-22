// screen-defeat-time

import Application from '../app';


const template = `
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
`;


const screenDefeatTime = document.createElement(`section`);
screenDefeatTime.classList.add(`result`);
screenDefeatTime.innerHTML = template;

const btnReplay = screenDefeatTime.querySelector(`.result__replay`);
btnReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  Application.showGame();
});


export default screenDefeatTime;
