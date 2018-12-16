// game-artist-view

import AbstractView from './abstract-view';


/**
 * Модуль GameArtistView описывает внешний вид и поведение игрового экрана Артист
 */
export default class GameArtistView extends AbstractView {
  constructor(htmlClasses = [], quest) {
    super(htmlClasses);
    this.quest = quest;
  }

  get template() {
    return `
  <h2 class="game__title">Кто исполняет эту песню?</h2>

  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${this.quest.track.src}"></audio>
  </div>

  <form class="game__artist">
    ${(this.quest.answers).map((answer, ind) =>
    `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${ind + 1}" id="answer-${ind + 1}">
      <label class="artist__name" for="answer-${ind + 1}">
        <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
        ${answer.artist}
      </label>
    </div>`).join(``)}
  </form>
    `;
  }

  onChoose() {}

  bind() {
    const artistForm = this.element.querySelector(`.game__artist`);
    const artistInputs = artistForm.querySelectorAll(`.artist__input`);

    // Обработчик для выбора варианта ответа
    artistForm.addEventListener(`change`, () => {
      for (const input of artistInputs) {
        if (input.checked === true) {
          this.onChoose();
          return;
        }
      }
    });

    // Обработчик кнопки Плей
    const playBtn = this.element.querySelector(`.track__button`);
    const player = this.element.querySelector(`audio`);
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
  }
}
