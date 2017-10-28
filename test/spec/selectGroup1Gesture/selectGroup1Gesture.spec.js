
// configure test ioc
require('../../support/testIoc');
const ioc = require('../../../src/ioc');

// component being tested
const gesture = require('../../../src/game/gestures/selectGroup1Gesture');

// test utility
const { expect } = require('../../support/testUtils');
const singlePreciseTapData = require('./data/singlePreciseTap.json');
const smallCircle = require('./data/smallCircle.json');

describe.only('selectGroup1Gesture', () => {

  it('single precise tap', () => {
    expect(gesture.apply(singlePreciseTapData)).to.be.true;
  });

  it('small circle', () => {
    expect(gesture.apply(smallCircle)).to.be.false;
  });

});
