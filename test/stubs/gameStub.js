
class GameStub {

  constructor() {
    this.phaserGame = {
      load: () => {},
      physics: {
        startSystem: () => {}
      },
      world: {
        setBounds: () => {}
      }
    };
  }

  start(width, height) {}
  reset() {}
}

module.exports = new GameStub();
