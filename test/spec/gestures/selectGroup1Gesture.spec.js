
// configure test ioc
require('../../support/testIoc');

// component being tested
const gesture = require('../../../src/game/gestures/selectGroup1Gesture');

// test utility
const { expect } = require('../../support/testUtils');
const singlePreciseTapData = require('./data/singlePreciseTap.json');
const smallCircle = require('./data/smallCircle.json');
const doublePreciseTap = require('./data/doublePreciseTap.json');
const mouseClick = require('./data/mouseClick.json');

describe('selectGroup1Gesture', () => {

  it('gesture name', () => {
    expect(gesture.getName()).to.eql('Select Group 1');
  });

  it('single precise tap', () => {
    expect(gesture.isGestureApplicable(singlePreciseTapData)).to.be.true;
  });

  it('small circle', () => {
    expect(gesture.isGestureApplicable(smallCircle)).to.be.false;
  });

  it('two fingers', () => {
    expect(gesture.isGestureApplicable(doublePreciseTap)).to.be.false;
  });

  it('mouse click', () => {
    expect(gesture.isGestureApplicable(mouseClick)).to.be.false;
  });

});
