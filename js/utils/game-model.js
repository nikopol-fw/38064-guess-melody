// game-model

import {INIT_GAME, changeLevel, tick} from '../data/quest';


export default class GameModel {
  constructor() {
    this.restart();
    this.answers = [];
    this._gameTime = 0;
  }

  get state() {
    return this._state;
  }

  set gameTime(time) {
    this._gameTime = INIT_GAME.time - time;
  }

  get gameTime() {
    return this._gameTime;
  }

  restart() {
    this._state = INIT_GAME;
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  tickTime() {
    this._state = tick(this._state);
  }
}
