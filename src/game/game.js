
const ioc = require('../ioc');
const screenfull = require('screenfull');

class Game {

  start(width, height, parent) {
    this.phaserGame = new Phaser.Game(width, height, Phaser.AUTO, parent);
    this.width = width;
    this.height = height;
    this.phaserGame.state.add('playSplashState', ioc.PlaySplashState);
    this.phaserGame.state.add('playState', ioc.PlayState);
    parent.addEventListener('click', () => {
      screenfull.request(parent);
    });
    this.phaserGame.state.start('playSplashState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
