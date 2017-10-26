
const PointerStub = require('./PointerStub');

class GameStub {

  constructor() {
    this.phaserGame = {
      load: () => {},
      physics: {
        startSystem: () => {}
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
