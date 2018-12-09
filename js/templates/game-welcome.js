
import {startGame} from '../game';


const template = `
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
`;


const welcomeTemplate = document.createElement(`section`);
welcomeTemplate.classList.add(`welcome`);
welcomeTemplate.innerHTML = template;

const playBtn = welcomeTemplate.querySelector(`.welcome__button`);
playBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  startGame();
});


export default welcomeTemplate;
