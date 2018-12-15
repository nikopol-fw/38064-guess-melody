
import QUESTS from '../data/data-quest';
import {game, startGame, toNextLevel} from '../game';
import {layout, gameScreen, changeLayoutState} from '../templates/layout-main';
import headerTemplate from '../templates/layout-header';
import WelcomeView from '../templates/welcome-view';
import GameGenreView from '../templates/game-genre-view';
import GameArtistView from '../templates/game-artist-view';
import resultTemplate from '../templates/game-result';
import defeatTemplate from '../templates/game-defeat';


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

  const welcomeScreen = new WelcomeView([`welcome`, `fuck`]);
  welcomeScreen.onClick = startGame;

  render(mainNode, welcomeScreen.element);
};

// Отрисовка игрового экрана
const renderGameScreen = (levelIndex) => {
  gameScreen.innerHTML = ``;

  switch (QUESTS[levelIndex].type) {
    case `genre`:
      changeLayoutState(`game--genre`);
      const genreScreen = new GameGenreView([`game__screen`], QUESTS[game.level]);
      genreScreen.onSubmit = toNextLevel;
      render(gameScreen, genreScreen.element);
      break;

    case `artist`:
      changeLayoutState(`game--artist`);
      const artistScreen = new GameArtistView([`game__screen`], QUESTS[game.level]);
      artistScreen.onChoose = toNextLevel;
      render(gameScreen, artistScreen.element);
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
