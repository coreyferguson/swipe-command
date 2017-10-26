
require('../support/testIoc');
const ioc = require('../../src/ioc');
const gestureCommands = require('../../src/game/gameStates/gestureCommands');
const { expect } = require('../support/testUtils');

describe('gestureCommands', () => {

  describe('isPointerDown', () => {

    it('no pointers down', () => {
      expect(gestureCommands.isPointerDown()).to.be.false;
    });

    it('mouse pointer down', () => {
      ioc.game.phaserGame.input.mousePointer.isDown = true;
      expect(gestureCommands.isPointerDown()).to.be.true;
      ioc.game.phaserGame.input.mousePointer.isDown = false;
    });

    it('first finger down', () => {
      ioc.game.phaserGame.input.pointers[0].isDown = true;
      expect(gestureCommands.isPointerDown()).to.be.true;
      ioc.game.phaserGame.input.pointers[0].isDown = false;
    });

  });

});
