// result-win-screen

import {FAST_ANSWER} from '../data/quest';
import ResultWinView from '../templates/result-win-view';


/**
 * Модуль ResultWinScreen описывает Presenter для экрана результатов при победе
 */
export default class ResultWinScreen {
  constructor(model) {
    this.model = model;
    this.content = new ResultWinView(
        [`result`],
        this.model.gameTime,
        this._getFastAnswers(this.model.answers)
    );
  }

  get element() {
    return this.content.element;
  }

  _getFastAnswers(answers) {
    let count = 0;
    answers.forEach((answer) => {
      if (answer.time < FAST_ANSWER) {
        count++;
      }
    });

    return count;
  }
}
