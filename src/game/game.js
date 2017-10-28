
const ioc = require('../ioc');
const screenfull = require('screenfull');

class Game {

  start(width, height, parent) {
    this.phaserGame = new Phaser.Game(width, height, Phaser.AUTO, parent);

    this.width = width;
    this.height = height;
    this.phaserGame.state.add('fieldState', ioc.fieldState);
    parent.addEventListener('click', () => {
      screenfull.request(parent);
    });
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
