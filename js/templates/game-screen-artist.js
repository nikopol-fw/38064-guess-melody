
import QUESTS from '../data/data-quest';
import {toNextLevel} from '../game';


const getArtistTemplate = (level) => {
  const template = `
  <h2 class="game__title">Кто исполняет эту песню?</h2>

  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${QUESTS[level].track.src}"></audio>
  </div>

  <form class="game__artist">
    ${(QUESTS[level].answers).map((answer, ind) =>
    `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${ind + 1}" id="answer-${ind + 1}">
      <label class="artist__name" for="answer-${ind + 1}">
        <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
        ${answer.artist}
      </label>
    </div>`).join(``)}
  </form>
  `;

  const artistTemplate = document.createElement(`section`);
  artistTemplate.innerHTML = template;

  const artistForm = artistTemplate.querySelector(`.game__artist`);
  const artistInputs = artistForm.querySelectorAll(`.artist__input`);


  // Обработчик для выбора варианта ответа
  artistForm.addEventListener(`change`, () => {
    for (const input of artistInputs) {
      if (input.checked === true) {
        toNextLevel();
        return;
      }
    }
  });

  // Обработчик кнопки Плей
  const playBtn = artistTemplate.querySelector(`.track__button`);
  const player = artistTemplate.querySelector(`audio`);
  playBtn.addEventListener(`click`, () => {
    if (playBtn.classList.contains(`track__button--play`)) {
      player.play();
      playBtn.classList.remove(`track__button--play`);
      playBtn.classList.add(`track__button--pause`);
    } else {
      player.pause();
      playBtn.classList.remove(`track__button--pause`);
      playBtn.classList.add(`track__button--play`);
    }
  });

  return artistTemplate;
};


export default getArtistTemplate;
