
import {startGame} from '../game';


const template = `
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
`;


const defeatTemplate = document.createElement(`section`);
defeatTemplate.classList.add(`result`);
defeatTemplate.innerHTML = template;

const btnReplay = defeatTemplate.querySelector(`.result__replay`);
btnReplay.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  startGame();
});


export default defeatTemplate;
