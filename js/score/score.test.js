import {assert} from 'chai';
import getScore from './score';


describe(`Scores`, () => {
  it(`Answers should be more than 10`, () => {
    assert.equal(getScore([{
      answer: true, time: 25000}, {
      answer: true, time: 35000}, {
      answer: true, time: 45000}, {
      answer: true, time: 15000
    }], 0), -1);
    assert.equal(getScore([{
      answer: false, time: 10000
    }], 0), -1);
    assert.equal(getScore([{
      answer: false, time: 5000}, {
      answer: true, time: 5000}, {
      answer: false, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 5000
    }], 0), -1);
    assert.notEqual(getScore([{
      answer: true, time: 5000}, {
      answer: true, time: 5000}, {
      answer: true, time: 99999}, {
      answer: true, time: 45000}, {
      answer: false, time: 31000}, {
      answer: true, time: 32000}, {
      answer: true, time: 100000}, {
      answer: true, time: 50000}, {
      answer: true, time: 60000}, {
      answer: true, time: 50000
    }], 2), -1);
  });

  it(`Scores are correct`, () => {
    assert.equal(getScore([{
      answer: true, time: 30001}, {
      answer: true, time: 150000}, {
      answer: true, time: 99999}, {
      answer: true, time: 45000}, {
      answer: true, time: 31000}, {
      answer: true, time: 32000}, {
      answer: true, time: 100000}, {
      answer: true, time: 50000}, {
      answer: true, time: 60000}, {
      answer: true, time: 50000
    }], 3), 10);
    assert.equal(getScore([{
      answer: true, time: 5000}, {
      answer: true, time: 150000}, {
      answer: true, time: 99999}, {
      answer: false, time: 15000}, {
      answer: true, time: 31000}, {
      answer: true, time: 32000}, {
      answer: true, time: 10000}, {
      answer: true, time: 50000}, {
      answer: false, time: 60000}, {
      answer: true, time: 50000
    }], 1), 6);
    assert.equal(getScore([{
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000}, {
      answer: false, time: 1000}, {
      answer: true, time: 1000}, {
      answer: true, time: 1000
    }], 2), 16);
  });
});
