
const PointerStub = require('./PointerStub');
const SpriteStub = require('./SpriteStub');
const TileSpriteStub = require('./TileSpriteStub');

class GameStub {

  constructor() {
    this.width = 900;
    this.height = 1600;
    this.phaserGame = {
      width: 900,
      height: 1600,
      add: {
        sprite: () => new SpriteStub(),
        tileSprite: () => new TileSpriteStub()
      },
      load: {
        image: () => {}
      },
      physics: {
        startSystem: () => {}
      },
      scale: {
        forceOrientation: () => {}
      },
      world: {
        setBounds: () => {}
      },
      input: {
        mousePointer: new PointerStub(),
        pointers: [
          new PointerStub()
        ]
      }
    };
  }

  start() {}
  reset() {}
}

module.exports = new GameStub();
