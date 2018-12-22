import {assert} from 'chai';
import getScore from './score';


describe(`Scores`, () => {
  it(`Answers should be more than 10`, () => {
    assert.equal(getScore([{
      isRight: true, time: 25}, {
      isRight: true, time: 35}, {
      isRight: true, time: 45}, {
      isRight: true, time: 15
    }], 0), -1);
    assert.equal(getScore([{
      isRight: false, time: 10
    }], 0), -1);
    assert.equal(getScore([{
      isRight: false, time: 5}, {
      isRight: true, time: 5}, {
      isRight: false, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 5
    }], 0), -1);
    assert.notEqual(getScore([{
      isRight: true, time: 5}, {
      isRight: true, time: 5}, {
      isRight: true, time: 99999}, {
      isRight: true, time: 45}, {
      isRight: false, time: 31}, {
      isRight: true, time: 32}, {
      isRight: true, time: 100}, {
      isRight: true, time: 50}, {
      isRight: true, time: 60}, {
      isRight: true, time: 50
    }], 2), -1);
  });

  it(`Scores are correct`, () => {
    assert.equal(getScore([{
      isRight: true, time: 31}, {
      isRight: true, time: 150}, {
      isRight: true, time: 99999}, {
      isRight: true, time: 45}, {
      isRight: true, time: 31}, {
      isRight: true, time: 32}, {
      isRight: true, time: 100}, {
      isRight: true, time: 50}, {
      isRight: true, time: 60}, {
      isRight: true, time: 50
    }], 3), 10);
    assert.equal(getScore([{
      isRight: true, time: 5}, {
      isRight: true, time: 150}, {
      isRight: true, time: 99999}, {
      isRight: false, time: 15}, {
      isRight: true, time: 31}, {
      isRight: true, time: 32}, {
      isRight: true, time: 10}, {
      isRight: true, time: 50}, {
      isRight: false, time: 60}, {
      isRight: true, time: 50
    }], 1), 6);
    assert.equal(getScore([{
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1}, {
      isRight: false, time: 1}, {
      isRight: true, time: 1}, {
      isRight: true, time: 1
    }], 2), 16);
  });
});
