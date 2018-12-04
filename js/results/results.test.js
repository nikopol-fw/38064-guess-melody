import {assert} from 'chai';
import getResults from './results';


describe(`Results`, () => {
  it(`Defeat correct answer`, () => {
    assert.equal(getResults([{
      scores: 10, lives: 2, remain: 100000}, {
      scores: 12, lives: 1, remain: 56000}, {
      scores: 8, lives: 1, remain: 15000
    }], {
      scores: 4, lives: 0, remain: 50000
    }), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);

    assert.equal(getResults([{
      scores: 10, lives: 2, remain: 100000}, {
      scores: 12, lives: 1, remain: 56000}, {
      scores: 8, lives: 1, remain: 15000
    }], {
      scores: 13, lives: 3, remain: 0
    }), `Время вышло! Вы не успели отгадать все мелодии`);
  });


  it(`Win correct answer`, () => {
    assert.equal(getResults([{
      scores: 10, lives: 2, remain: 100000}, {
      scores: 12, lives: 1, remain: 56000}, {
      scores: 8, lives: 1, remain: 1000}, {
      scores: 12, lives: 3, remain: 100000}, {
      scores: 15, lives: 3, remain: 300000}, {
      scores: 13, lives: 2, remain: 20000}, {
      scores: 8, lives: 1, remain: 15000
    }], {
      scores: 11, lives: 1, remain: 10000
    }), `Вы заняли 5 место из 8 игроков. Это лучше, чем у 38% игроков`);

    assert.equal(getResults([{
      scores: 10, lives: 2, remain: 100000}, {
      scores: 12, lives: 1, remain: 56000}, {
      scores: 8, lives: 1, remain: 1000}, {
      scores: 12, lives: 3, remain: 100000}, {
      scores: 15, lives: 3, remain: 300000}, {
      scores: 13, lives: 2, remain: 20000}, {
      scores: 13, lives: 2, remain: 20000}, {
      scores: 13, lives: 2, remain: 20000}, {
      scores: 8, lives: 1, remain: 15000
    }], {
      scores: 20, lives: 3, remain: 20000
    }), `Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`);

    assert.equal(getResults([{
      scores: 10, lives: 2, remain: 100000}, {
      scores: 12, lives: 1, remain: 56000}, {
      scores: 8, lives: 1, remain: 1000}, {
      scores: 12, lives: 3, remain: 100000}, {
      scores: 15, lives: 3, remain: 300000}, {
      scores: 13, lives: 2, remain: 20000}, {
      scores: 20, lives: 3, remain: 25000}, {
      scores: 20, lives: 1, remain: 21000}, {
      scores: 10, lives: 2, remain: 99999}, {
      scores: 9, lives: 1, remain: 1}, {
      scores: 8, lives: 1, remain: 15000
    }], {
      scores: 8, lives: 3, remain: 20000
    }), `Вы заняли 12 место из 12 игроков. Это лучше, чем у 0% игроков`);
  });
});
