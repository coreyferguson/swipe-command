
const ioc = require('../ioc');

class Game {

  start(width, height) {
    this.phaserGame = new Phaser.Game(1024, 768, Phaser.AUTO);
    this.width = width;
    this.height = height;
    this.phaserGame.state.add('fieldState', ioc.fieldState);
    this.reset();
  }

  reset() {
    ioc.fieldStates
      .filter(fieldState => fieldState.reset)
      .forEach(fieldState => fieldState.reset());
    this.phaserGame.state.start('fieldState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
