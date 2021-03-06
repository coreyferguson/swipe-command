
// configure test ioc
require('../../support/testIoc');

// component being tested
const gesture = require('../../../src/game/gestures/advanceGesture');

// test utility
const { expect } = require('../../support/testUtils');
const swipeUp = require('./data/swipeUp.json');
const mouseClick = require('./data/mouseClick.json');
const swipeDown = require('./data/swipeDown.json');

describe('advanceGesture', () => {

  it('gesture name', () => {
    expect(gesture.getName()).to.eql('Advance');
  });

  it('swipe up', () => {
    expect(gesture.isGestureApplicable(swipeUp)).to.be.true;
  });

  it('not swipe down', () => {
    expect(gesture.isGestureApplicable(swipeDown)).to.be.false;
  });

  it('not mouse click', () => {
    expect(gesture.isGestureApplicable(mouseClick)).to.be.false;
  });

});
