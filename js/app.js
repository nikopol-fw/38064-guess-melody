// app

import WelcomeView from './templates/welcome-view';
import GameModel from './utils/game-model';
import GameScreen from './utils/game-screen';
import ResultWinScreen from './utils/result-win-screen';
import screenDefeatTime from './templates/screen-defeat-time';


const appNode = document.querySelector(`.app`);
const mainNode = appNode.querySelector(`.main`);

const layoutNode = document.createElement(`section`);
layoutNode.classList.add(`game`);


// Отчистка экрана
const clearScreen = () => {
  mainNode.innerHTML = ``;
};

// Отрисовывает основной шаблон
const renderLayout = () => {
  layoutNode.innerHTML = ``;
  renderView(mainNode, layoutNode);
};

// Меняет класс для конкретного шаблона игрового экрана
const changeLayoutState = (layoutClass) => {
  Array.from(layoutNode.classList).forEach((classItem) => {
    if (classItem !== `game`) {
      layoutNode.classList.remove(classItem);
    }
  });

  layoutNode.classList.add(layoutClass);
};

// Отрисовываем header
const renderHeader = (element) => {
  layoutNode.insertAdjacentElement(`afterbegin`, element);
};

// Отрисовывает Node внутри указанного Node
const renderView = (parentNode, element) => {
  parentNode.appendChild(element);
};

/**
 * Модуль Application является реализацией singleton паттерна.
 * Реализует переключение экранов (роутинг) внутри игры
 */
export default class Application {

  static showWelcome() {
    clearScreen();
    const welcome = new WelcomeView([`welcome`]);
    renderView(mainNode, welcome.element);
  }

  static showGame() {
    clearScreen();
    renderLayout();
    const gameScreen = new GameScreen(new GameModel());
    if (gameScreen.layoutClass) {
      changeLayoutState(gameScreen.layoutClass);
    }
    renderHeader(gameScreen.header.element);
    renderView(layoutNode, gameScreen.element);
    gameScreen.startGame();
  }

  static showResult(model) {
    clearScreen();
    const resultScreen = new ResultWinScreen(model);
    renderView(mainNode, resultScreen.element);
  }

  static showDefeatTime() {
    clearScreen();
    const defeatScreen = screenDefeatTime;
    renderView(mainNode, defeatScreen);
  }

  static getLayout() {
    return layoutNode;
  }
}
