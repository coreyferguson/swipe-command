
// configure test ioc
require('../../support/testIoc');

// component being tested
const gesture = require('../../../src/game/gestures/retreatGesture');

// test utility
const { expect } = require('../../support/testUtils');
const swipeUp = require('./data/swipeUp.json');
const mouseClick = require('./data/mouseClick.json');
const swipeDown = require('./data/swipeDown.json');

describe('retreatGesture', () => {

  it('gesture name', () => {
    expect(gesture.getName()).to.eql('Retreat');
  });

  it('swipe down', () => {
    expect(gesture.isGestureApplicable(swipeDown)).to.be.true;
  });

  it('not swipe up', () => {
    expect(gesture.isGestureApplicable(swipeUp)).to.be.false;
  });

  it('not mouse click', () => {
    expect(gesture.isGestureApplicable(mouseClick)).to.be.false;
  });

});
