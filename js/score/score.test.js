import {assert} from 'chai';
import getScore from './score';


describe(`Scores`, () => {
  it(`Answers should be more than 10`, () => {
    assert.equal(getScore([{
      answer: true, time: 25}, {
      answer: true, time: 35}, {
      answer: true, time: 45}, {
      answer: true, time: 15
    }], 0), -1);
    assert.equal(getScore([{
      answer: false, time: 10
    }], 0), -1);
    assert.equal(getScore([{
      answer: false, time: 5}, {
      answer: true, time: 5}, {
      answer: false, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 5
    }], 0), -1);
    assert.notEqual(getScore([{
      answer: true, time: 5}, {
      answer: true, time: 5}, {
      answer: true, time: 99999}, {
      answer: true, time: 45}, {
      answer: false, time: 31}, {
      answer: true, time: 32}, {
      answer: true, time: 100}, {
      answer: true, time: 50}, {
      answer: true, time: 60}, {
      answer: true, time: 50
    }], 2), -1);
  });

  it(`Scores are correct`, () => {
    assert.equal(getScore([{
      answer: true, time: 31}, {
      answer: true, time: 150}, {
      answer: true, time: 99999}, {
      answer: true, time: 45}, {
      answer: true, time: 31}, {
      answer: true, time: 32}, {
      answer: true, time: 100}, {
      answer: true, time: 50}, {
      answer: true, time: 60}, {
      answer: true, time: 50
    }], 3), 10);
    assert.equal(getScore([{
      answer: true, time: 5}, {
      answer: true, time: 150}, {
      answer: true, time: 99999}, {
      answer: false, time: 15}, {
      answer: true, time: 31}, {
      answer: true, time: 32}, {
      answer: true, time: 10}, {
      answer: true, time: 50}, {
      answer: false, time: 60}, {
      answer: true, time: 50
    }], 1), 6);
    assert.equal(getScore([{
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1}, {
      answer: false, time: 1}, {
      answer: true, time: 1}, {
      answer: true, time: 1
    }], 2), 16);
  });
});
