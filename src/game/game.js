
const ioc = require('../ioc');

class Game {

  start(width, height) {
    this.phaserGame = new Phaser.Game(1024, 768, Phaser.AUTO);
    this.width = width;
    this.height = height;
    this.phaserGame.state.add('mapState', ioc.mapState);
    this.phaserGame.state.add('gameOverState', ioc.gameOverState);
    this.reset();
  }

  reset() {
    ioc.mapStates
      .filter(mapState => mapState.reset)
      .forEach(mapState => mapState.reset());
    this.phaserGame.state.start('mapState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
