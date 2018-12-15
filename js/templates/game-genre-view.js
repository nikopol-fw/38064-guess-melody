// game-genre-view

import AbstractView from './abstract-view';


/**
 * Модуль GameGenreView описывает внешний вид и поведение игрового экрана Жанр
 */
export default class GameGenreView extends AbstractView {
  constructor(htmlClasses = [], quest) {
    super(htmlClasses);
    this.quest = quest;
    this.Genre = {
      'Jazz': `Джаз`,
      'Rock': `Рок`,
      'Country': `Кантри`,
      'R&B': `Ритм-энд-блюз`,
      'Pop': `Поп`,
      'Electronic': `Электро`
    }
  }

  get template() {
    return `
  <h2 class="game__title">Выберите ${this.Genre[this.quest.genre]} треки</h2>
  <form class="game__tracks">
  ${Array.from(this.quest.tracks).map((track, ind) =>
    `<div class="track">
      <button class="track__button track__button--play" data-track="track-${ind + 1}" type="button"></button>
      <div class="track__status">
        <audio src="${track.src}" id="track-${ind + 1}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${ind + 1}" id="answer-${ind + 1}">
        <label class="game__check" for="answer-${ind + 1}">Отметить</label>
      </div>
    </div>`).join(``)}
    <button class="game__submit button" type="submit">Ответить</button>
  </form>
    `;
  }

  onSubmit() {}

  bind() {
    const form = this.element.querySelector(`.game__tracks`);
    const submitBtn = form.querySelector(`.game__submit`);
    submitBtn.disabled = true;

    // Блокировка кнопки ответить, если не выбран вариант ответа
    const checkBoxs = form.querySelectorAll(`.game__input`);
    const formChangeHandler = () => {
      for (const checkBox of checkBoxs) {
        if (checkBox.checked === true) {
          submitBtn.disabled = false;
          return;
        }
        submitBtn.disabled = true;
      }
    };
    form.addEventListener(`change`, formChangeHandler);

    // Обработчик для кнопки "Ответить"
    submitBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      this.onSubmit();
    });

    // Обработчики для кнопок Play
    const playBtns = form.querySelectorAll(`.track__button`);
    const players = form.querySelectorAll(`audio`);
    playBtns.forEach((btn) => {
      btn.addEventListener(`click`, () => {
        if (btn.classList.contains(`track__button--pause`)) {
          {
            const player = form.querySelector(`#${btn.dataset.track}`);
            player.pause();
          }
          btn.classList.remove(`track__button--pause`);
          btn.classList.add(`track__button--play`);
        } else {
          players.forEach((player) => player.pause());

          playBtns.forEach((btnPlayed) => {
            btnPlayed.classList.remove(`track__button--pause`);
            btnPlayed.classList.add(`track__button--play`);
          });
          btn.classList.remove(`track__button--play`);
          btn.classList.add(`track__button--pause`);

          const player = form.querySelector(`#${btn.dataset.track}`);
          player.play();
        }
      });
    });
  }
}
