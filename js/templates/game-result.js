
import {startGame} from '../game';


const template = `
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За&nbsp;3&nbsp;минуты и&nbsp;25&nbsp;секунд вы&nbsp;набрали 12&nbsp;баллов (8&nbsp;быстрых), совершив 3&nbsp;ошибки</p>
  <p class="result__text">Вы&nbsp;заняли 2&nbsp;место из&nbsp;10. Это лучше чем у&nbsp;80% игроков</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
`;


const resultTemplate = document.createElement(`section`);
resultTemplate.classList.add(`result`);
resultTemplate.innerHTML = template;

const btnReplay = resultTemplate.querySelector(`.result__replay`);
btnReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  startGame();
});


export default resultTemplate;
