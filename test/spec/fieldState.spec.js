
require('../support/testIoc');
const fieldState = require('../../src/game/phaserStates/fieldState');
const { expect, sinon } = require('../support/testUtils');
const ioc = require('../../src/ioc');

describe('fieldState unit test', () => {

  const sandbox = sinon.sandbox.create();

  before(() => {
    sandbox.restore();
  });

  it('preload ioc to fieldStates', () => {
    ioc.fieldStates.forEach(fieldState => {
      sandbox.stub(fieldState, 'preload');
    })
    fieldState.preload();
    ioc.fieldStates.forEach(fieldState => {
      expect(fieldState.preload).to.be.calledOnce;
    });
  });

  it('create ioc to fieldStates', () => {
    ioc.fieldStates.forEach(fieldState => {
      sandbox.stub(fieldState, 'create');
    })
    fieldState.create();
    ioc.fieldStates.forEach(fieldState => {
      expect(fieldState.create).to.be.calledOnce;
    });
  });

  it('update ioc to fieldStates', () => {
    ioc.fieldStates.forEach(fieldState => {
      sandbox.stub(fieldState, 'update');
    })
    fieldState.update();
    ioc.fieldStates.forEach(fieldState => {
      expect(fieldState.update).to.be.calledOnce;
    });
  });

});
