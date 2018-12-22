
import {INIT_GAME} from './data/quest';
import QUESTS from './data/quest-data';
import {renderLayout, renderGameScreen, renderResult, renderDefeat} from './utils/utils';


let game = Object.assign({}, INIT_GAME);

// Начать игру
const startGame = () => {
  game = Object.assign({}, INIT_GAME);

  renderLayout();
  renderGameScreen(game.level);
};

//
const toNextLevel = () => {
  game.level++;

  if (game.level < QUESTS.length) {
    renderGameScreen(game.level);
  } else {
    const rand = Math.round(Math.random());

    if (rand) {
      renderResult();
    } else {
      renderDefeat();
    }
  }
};


export {game, startGame, toNextLevel};
