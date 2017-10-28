
// configure test ioc
require('../../support/testIoc');

// component being tested
const gesture = require('../../../src/game/gestures/selectGroup1Gesture');

// test utility
const { expect } = require('../../support/testUtils');
const singlePreciseTapData = require('./data/singlePreciseTap.json');
const smallCircle = require('./data/smallCircle.json');
const doublePreciseTap = require('./data/doublePreciseTap.json');

describe.only('selectGroup1Gesture', () => {

  it('gesture name', () => {
    expect(gesture.getName()).to.eql('Select Group 1');
  });

  it('single precise tap', () => {
    expect(gesture.isApplicable(singlePreciseTapData)).to.be.true;
  });

  it('small circle', () => {
    expect(gesture.isApplicable(smallCircle)).to.be.false;
  });

  it('two fingers', () => {
    expect(gesture.isApplicable(doublePreciseTap)).to.be.false;
  });

});
