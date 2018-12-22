
const GAME_TIME = 300;
const LIVES = 3;
const FAST_ANSWER = 30;

const INIT_GAME = Object.freeze({
  level: 0,
  lives: LIVES,
  time: GAME_TIME,
  curTime: 0
});


const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  return Object.assign({}, game, {
    level
  });
};

const tick = (game) => {
  const time = game.time - 1;
  const curTime = game.curTime + 1;

  return Object.assign({}, game, {
    time,
    curTime
  });
};


export {INIT_GAME, FAST_ANSWER, changeLevel, tick};
