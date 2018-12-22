// result-win-view

import Application from '../app';
import AbstractView from './abstract-view';


const SECONDS = 60;


/**
 * Модуль ResultWinView описывает внешний вид экрана результатов
 */
export default class ResultWinView extends AbstractView {
  constructor(htmlClasses = [], gameTime, fastAnswers) {
    super(htmlClasses);
    this.gameTime = gameTime;
    this.gameMinutes = Math.floor(gameTime / SECONDS);
    this.gameSeconds = gameTime % SECONDS;
    this.fastAnswers = fastAnswers;
  }

  get template() {
    return `
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За&nbsp;${this.gameMinutes}&nbsp;минуты и&nbsp;${this.gameSeconds}&nbsp;секунд вы&nbsp;набрали 12&nbsp;баллов (${this.fastAnswers}&nbsp;быстрых), совершив 3&nbsp;ошибки</p>
  <p class="result__text">Вы&nbsp;заняли 2&nbsp;место из&nbsp;10. Это лучше чем у&nbsp;80% игроков</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
    `;
  }

  bind() {
    const btnReplay = this.element.querySelector(`.result__replay`);
    btnReplay.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      Application.showGame();
    });
  }
}
