'use strict';

const Key = {
  RIGHT: 39,
  LEFT: 37
};

const screenMap = [
  `welcome`,
  `game-genre`,
  `game-artist`,
  `result-success`,
  `fail-time`,
  `fail-tries`,
  `modal-error`,
  `modal-confirm`
];


let curScreen = 0;

const appNode = document.querySelector(`.app`);
const mainNode = appNode.querySelector(`.main`);

const templateNodes = Array.from(document.querySelectorAll(`template`)).
  sort((a, b) => {
    return screenMap.indexOf(a.id) - screenMap.indexOf(b.id);
  }).
  map((item) => item.content);


const showScreen = (index) => {
  mainNode.innerHTML = ``;
  const insertNode = templateNodes[index].cloneNode(true);
  mainNode.appendChild(insertNode);
};

const selectScreen = (index) => {
  if (index < 0) {
    index = templateNodes.length - 1;
  } else if (index >= templateNodes.length) {
    index = 0;
  }
  curScreen = index;

  showScreen(curScreen);
};


document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Key.RIGHT:
      selectScreen(curScreen + 1);
      break;

    case Key.LEFT:
      selectScreen(curScreen - 1);
      break;

    default:
      break;
  }
});


showScreen(0);


const arrowButtons = document.createElement(`div`);
arrowButtons.classList.add(`arrows__wrap`);
arrowButtons.innerHTML =
`<style>
  .arrows__wrap {
    position: absolute;
    top: 135px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    padding: 5px 20px;
    color: white;
    background: none;
    border: 2px solid white;
  }
</style>
<button type="button" class="arrows__btn arrows__btn--prev"><-</button>
<button type="button" class="arrows__btn arrows__btn--next">-></button>`;
appNode.appendChild(arrowButtons);

const navigationNext = arrowButtons.querySelector(`.arrows__btn--next`);
const navigationPrev = arrowButtons.querySelector(`.arrows__btn--prev`);

if (navigationNext) {
  navigationNext.addEventListener(`click`, () => {
    selectScreen(curScreen + 1);
  });
}

if (navigationPrev) {
  navigationPrev.addEventListener(`click`, () => {
    selectScreen(curScreen - 1);
  });
}
