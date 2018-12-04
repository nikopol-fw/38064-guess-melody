
const getScore = (answers, lives) => {
  const TIME_LIMIT = 30000;
  const Answer = {
    WRONG: -2,
    RIGHT: 1,
    RIGHT_FAST: 2
  };

  if (answers.length < 10) {
    return -1;
  }


  let scores = 0;

  answers.forEach((answer) => {
    if (answer.answer === false) {
      scores += Answer.WRONG;
    } else if (answer.time >= TIME_LIMIT) {
      scores += Answer.RIGHT;
    } else {
      scores += Answer.RIGHT_FAST;
    }
  });

  // Параметр lives на данный момент является бесполезным, в подсчете результатов игры
  // он никак не участвует. Данный код написани, чтобы проходить проверку eslint.
  // Удалить после реализации приложения
  answers = lives;

  return scores;
};


export default getScore;
