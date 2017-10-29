
const ioc = require('../../ioc');

class PlayState extends ioc.Phaser.State {

  preload() {
    ioc.game.phaserGame.load.crossOrigin = 'anonymous';
    ioc.game.phaserGame.load.baseURL = ioc.config.assetsBaseUrl;
    ioc.game.phaserGame.load.image('background', 'images/background.png');
    ioc.game.phaserGame.load.image('lieutenant', 'ships/miner_100x100.png');
    ioc.playStates.forEach(state => {
      if (state.preload) state.preload();
    });
  }

  create() {
    ioc.game.phaserGame.physics.startSystem(ioc.Phaser.Physics.ARCADE);
    this.createBackground();
    ioc.playStates.forEach(state => {
      if (state.create) state.create();
    });
  }

  update() {
    ioc.playStates.forEach(state => {
      if (state.update) state.update();
    });
  }

  createBackground() {
    this.background = ioc.game.phaserGame.add.tileSprite(
      0,
      0,
      ioc.game.width,
      ioc.game.height,
      'background'
    );
    this.background.tileScale.setTo(0.25, 0.25);
  }

}

module.exports = PlayState;
