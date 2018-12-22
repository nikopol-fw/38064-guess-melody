// game-screen

import QUESTS from '../data/quest-data';
import HeaderView from '../templates/header-view';
import GameGenreView from '../templates/game-genre-view';
import GameArtistView from '../templates/game-artist-view';


import resultDefeatTime from '../templates/result-defeat-time';
//import resultDefeatLives from '../templates/result-defeat-lives';
import Application from '../app';


export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView([`game__header`], this.model.state);
    this.header.onClick = () => {
      this.stopGame();
      Application.showWelcome();
    };
    this.content = this._getLevelByType(model.state.level);


    this._timer = null;
  }

  get element() {
    return this.content.element;
  }

  get layoutClass() {
    return this._layoutClass;
  }

  _getLevelByType(levelType) {
    let level;
    switch (QUESTS[levelType].type) {
      case `genre`:
        level = new GameGenreView([`game__screen`], QUESTS[this.model.state.level]);
        level.onSubmit = this._getAnswerGenre.bind(this);
        this._layoutClass = `game--genre`;
        break;

      case `artist`:
        level = new GameArtistView([`game__screen`], QUESTS[this.model.state.level]);
        level.onChoose = this._getAnswerArtist.bind(this);
        this._layoutClass = `game--artist`;
        break;

      default:
        break;
    }

    return level;
  }

  _getAnswerGenre(checkedInputs) {
    this.stopGame();

    const quest = QUESTS[this.model.state.level];
    const isRight = quest.answers.every((answer, ind) => {
      return answer === checkedInputs[ind];
    });
    const time = this.model.state.curTime;
    const answer = {isRight, time};
    this.model.answers.push(answer);

    this._changeLevel();
  }

  _getAnswerArtist(inputValue) {
    this.stopGame();

    const quest = QUESTS[this.model.state.level];
    const isRight = quest.answer === inputValue ? true : false;
    const time = this.model.state.curTime;
    const answer = {isRight, time};

    this.model.answers.push(answer);

    this._changeLevel();
  }

  _changeLevel() {
    // Обнуляем время для следующего вопроса для подсчета очков
    this.model.state.curTime = 0;
    this.model.nextLevel();

    if (this.model.state.level < QUESTS.length) {
      const level = this._getLevelByType(this.model.state.level);
      this._changeGameScreen(level);
      this.startGame();
    } else {
      this.model.gameTime = this.model.state.time;
      Application.showResult(this.model);
    }
  }

  _changeGameScreen(view) {
    Application.getLayout().replaceChild(view.element, this.content.element);
    this.content = view;
  }

  _updateHeader() {
    const header = new HeaderView([`game__header`], this.model.state);
    header.onClick = () => {
      this.stopGame();
      Application.showWelcome();
    };
    Application.getLayout().replaceChild(header.element, this.header.element);
    this.header = header;
  }

  _tick() {
    if (this.model.state.time === 0) {
      Application.showResult(resultDefeatTime);
    } else {
      this._timer = setTimeout(() => {
        this.model.tickTime();
        this._updateHeader();
        this._tick();
      }, 1000);
    }
  }

  stopGame() {
    clearTimeout(this._timer);
  }

  startGame() {
    this.updateGameScreen();

    this._tick();
  }

  updateGameScreen() {
    this._updateHeader();
  }
}
