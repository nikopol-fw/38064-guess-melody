
import {createNode, showScreen} from './utils.js';
import gameGenre from './game-genre.js';

import getScore from './score/score';


const template = `
  <section class="welcome">
    <div class="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
    </div>

    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>

    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За&nbsp;5&nbsp;минут нужно ответить на&nbsp;все вопросы.</li>
      <li>Можно допустить 3 ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>
  </section>
`;

const element = createNode(template);

const playBtn = element.querySelector(`.welcome__button`);
playBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  showScreen(gameGenre);
});

getScore([{
  answer: true, time: 30001}, {
  answer: true, time: 150000}, {
  answer: true, time: 99999}, {
  answer: true, time: 45000}, {
  answer: true, time: 31000}, {
  answer: true, time: 32000}, {
  answer: true, time: 100000}, {
  answer: true, time: 50000}, {
  answer: true, time: 60000}, {
  answer: true, time: 50000}
], 0);


export default element;
