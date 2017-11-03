
require('../support/testIoc');
const ioc = require('../../src/ioc');
const level = require('../../src/game/playStates/level');
const { expect, sinon } = require('../support/testUtils');

describe('level', () => {

  const sandbox = sinon.sandbox.create();

  beforeEach(() => {
    sandbox.restore();
  });

  it('sprites added to x axis & wraps down y axis', () => {
    const sprites = [];
    const lieutenantStub = ioc.lieutenant.spawn;
    const spawn = (x, y) => {
      const sprite = lieutenantStub(x, y);
      sprite.width = 400;
      sprite.height = 400;
      sprites.push(sprite);
      return sprite;
    };
    sandbox.stub(ioc.lieutenant, 'spawn').callsFake(spawn);
    level.create();
    expect(sprites.length).to.equal(5);
    expect(sprites[0].x).to.equal(50);
    expect(sprites[1].x).to.equal(450);
    expect(sprites[2].x).to.equal(850);
    expect(sprites[3].x).to.equal(50);
    expect(sprites[4].x).to.equal(450);
    expect(sprites[0].y).to.equal(1150);
    expect(sprites[1].y).to.equal(1150);
    expect(sprites[2].y).to.equal(1150);
    expect(sprites[3].y).to.equal(1550);
    expect(sprites[4].y).to.equal(1550);
  });

});
