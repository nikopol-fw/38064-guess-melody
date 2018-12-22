// header-view

import AbstractView from './abstract-view';
import {INIT_GAME} from '../data/quest';


const SECONDS = 60;


/**
 * Преобразует секунды в строку, и корректирует вывод,
 * чтобы выводилось всегда две цифры
 * @param {number} seconds - количество секунд
 * @return {string} secondString - преобразованная строка с количеством секунд
 */
const secondTwoDigit = (seconds) => {
  let secondString;
  if (seconds < 10) {
    secondString = `0${seconds}`;
  } else {
    secondString = `${seconds}`;
  }
  return secondString;
};

/**
 * Модуль HeaderView описывает внешний вид и поведение хедера
 */
export default class HeaderView extends AbstractView {
  constructor(htmlClasses = [], game) {
    super(htmlClasses);
    this.state = game;
    this.minutes = Math.floor(game.time / SECONDS);
    this.seconds = secondTwoDigit(game.time % SECONDS);
  }

  get template() {
    return `
  <a class="game__back" href="#">
    <span class="visually-hidden">Сыграть ещё раз</span>
    <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
  </a>

  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle class="timer__line" cx="390" cy="390" r="370"
            style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
  </svg>

  <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer__mins">${this.minutes}</span>
    <span class="timer__dots">:</span>
    <span class="timer__secs">${this.seconds}</span>
  </div>

  <div class="game__mistakes">${this._getMistakes(INIT_GAME.lives, this.state.lives)}</div>
    `;
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this._render(this.template, `header`);
    this.bind(this._element);
    return this._element;
  }

  _getMistakes(initLives, curLives) {
    let string = ``;
    const mistakes = initLives - curLives;
    for (let i = 0; i < mistakes; i++) {
      string = `${string}<div class="wrong"></div>`;
    }
    return string;
  }

  onClick() {}

  bind() {
    const gameBack = this.element.querySelector(`.game__back`);
    gameBack.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      this.onClick();
    });
  }
}
