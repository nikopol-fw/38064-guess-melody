
const getResults = (playersResults, result) => {
  if (result.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  if (result.remain === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }


  playersResults.push(result);

  playersResults.sort((a, b) => {
    return b.scores - a.scores;
  });

  const playersNumber = playersResults.length;

  const place = playersResults
  .map((playerResult) => {
    return playerResult.scores;
  })
  .lastIndexOf(result.scores) + 1;

  const percentPlayers = Math.round((playersNumber - place) * 100 / playersNumber);


  return `Вы заняли ${place} место из ${playersNumber} игроков. Это лучше, чем у ${percentPlayers}% игроков`;
};


export default getResults;
