
require('../support/testIoc');
const ioc = require('../../src/ioc');
const gestureState = require('../../src/game/playStates/gesture');
const { expect } = require('../support/testUtils');

describe('gestureState', () => {

  describe('isPointerDown', () => {

    it('no pointers down', () => {
      expect(gestureState.isPointerDown()).to.be.false;
    });

    it('mouse pointer down', () => {
      ioc.game.phaserGame.input.mousePointer.isDown = true;
      expect(gestureState.isPointerDown()).to.be.true;
      ioc.game.phaserGame.input.mousePointer.isDown = false;
    });

    it('first finger down', () => {
      ioc.game.phaserGame.input.pointers[0].isDown = true;
      expect(gestureState.isPointerDown()).to.be.true;
      ioc.game.phaserGame.input.pointers[0].isDown = false;
    });

  });

});
