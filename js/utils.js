
import QUESTS from './data/data-quest';
import {game} from './game';
import {layout, gameScreen, changeLayoutState} from './templates/layout-main';
import headerTemplate from './templates/layout-header';
import welcomeTemplate from './templates/game-welcome';
import getGenreTemplate from './templates/game-screen-genre';
import getArtistTemplate from './templates/game-screen-artist';
import resultTemplate from './templates/game-result';
import defeatTemplate from './templates/game-defeat';


const appNode = document.querySelector(`.app`);
const mainNode = appNode.querySelector(`.main`);


const clearScreen = () => {
  mainNode.innerHTML = ``;
};

const render = (parentNode, template) => {
  parentNode.appendChild(template);
};

// Отрисовывает основной шаблон
const renderLayout = () => {
  clearScreen();
  render(mainNode, layout);
  layout.insertAdjacentElement(`afterbegin`, headerTemplate);
};

// Отрисовка экрана приветствия
const renderWelcomeScreen = () => {
  clearScreen();
  render(mainNode, welcomeTemplate);
};

// Отрисовка игрового экрана
const renderGameScreen = (levelIndex) => {
  gameScreen.innerHTML = ``;

  switch (QUESTS[levelIndex].type) {
    case `genre`:
      changeLayoutState(`game--genre`);
      render(gameScreen, getGenreTemplate(game.level));
      break;

    case `artist`:
      changeLayoutState(`game--artist`);
      render(gameScreen, getArtistTemplate(game.level));
      break;

    default:
      break;
  }
};

// Отрисовка экрана результатов
const renderResult = () => {
  clearScreen();
  render(mainNode, resultTemplate);
};

// Отрисовка экрана поражения
const renderDefeat = () => {
  clearScreen();
  render(mainNode, defeatTemplate);
};


export {renderLayout, renderWelcomeScreen, renderGameScreen, renderResult, renderDefeat};
