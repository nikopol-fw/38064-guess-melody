
import {createNode, showScreen} from './utils.js';
import gameGenre from './game-genre.js';


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


export default element;
