// score

const getScore = (answers) => {
  const TIME_LIMIT = 30;
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
    if (answer.isRight === false) {
      scores += Answer.WRONG;
    } else if (answer.time >= TIME_LIMIT) {
      scores += Answer.RIGHT;
    } else {
      scores += Answer.RIGHT_FAST;
    }
  });

  return scores;
};


export default getScore;
