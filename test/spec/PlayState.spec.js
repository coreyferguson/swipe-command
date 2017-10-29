
require('../support/testIoc');
const PlayState = require('../../src/game/states/PlayState');
const { expect, sinon } = require('../support/testUtils');
const ioc = require('../../src/ioc');

describe('playState unit test', () => {

  const sandbox = sinon.sandbox.create();
  const playState = new PlayState();

  before(() => {
    sandbox.restore();
  });

  it('preload ioc to playStates', () => {
    ioc.playStates.forEach(playState => {
      sandbox.stub(playState, 'preload');
    });
    playState.preload();
    ioc.playStates.forEach(playState => {
      expect(playState.preload).to.be.calledOnce;
    });
  });

  it('create ioc to playStates', () => {
    ioc.playStates.forEach(playState => {
      sandbox.stub(playState, 'create');
    });
    playState.create();
    ioc.playStates.forEach(playState => {
      expect(playState.create).to.be.calledOnce;
    });
  });

  it('update ioc to playStates', () => {
    ioc.playStates.forEach(playState => {
      sandbox.stub(playState, 'update');
    });
    playState.update();
    ioc.playStates.forEach(playState => {
      expect(playState.update).to.be.calledOnce;
    });
  });

});
