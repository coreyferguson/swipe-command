
const PointerStub = require('./PointerStub');

class GameStub {

  constructor() {
    this.phaserGame = {
      add: {
        tileSprite: () => {
          return {
            tileScale: {
              setTo: () => {}
            }
          };
        }
      },
      load: {
        image: () => {}
      },
      physics: {
        startSystem: () => {}
      },
      scale: {},
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
