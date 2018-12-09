
import QUESTS from '../data/data-quest';
import {toNextLevel} from '../game';


const Genre = {
  'Jazz': `Джаз`,
  'Rock': `Рок`,
  'Country': `Кантри`,
  'R&B': `Ритм-энд-блюз`,
  'Pop': `Поп`,
  'Electronic': `Электро`
};

const getGenreTemplate = (level) => {
  const template = `
  <h2 class="game__title">Выберите ${Genre[QUESTS[level].genre]} треки</h2>
  <form class="game__tracks">
  ${Array.from(QUESTS[level].tracks).map((track, ind) =>
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

  const genreTemplate = document.createElement(`section`);
  genreTemplate.innerHTML = template;

  const form = genreTemplate.querySelector(`.game__tracks`);
  const submitBtn = form.querySelector(`.game__submit`);
  submitBtn.disabled = true;

  // Блокировка кнопки ответить, если не выбран вариант ответа
  const checkBoxs = Array.from(form.querySelectorAll(`.game__input`));
  const formChangeHandler = () => {
    for (let i = 0; i < checkBoxs.length; i++) {
      if (checkBoxs[i].checked === true) {
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

    toNextLevel();
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

  return genreTemplate;
};


export default getGenreTemplate;
