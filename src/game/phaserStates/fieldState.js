
const ioc = require('../../ioc');

class FieldState {

  preload() {
    ioc.game.phaserGame.load.crossOrigin = 'anonymous';
    ioc.game.phaserGame.load.baseURL = ioc.config.assetsBaseUrl;
    ioc.game.phaserGame.load.image('background', 'images/background.png');
    ioc.fieldStates.forEach(state => {
      if (state.preload) state.preload();
    });
  }

  create() {
    ioc.game.phaserGame.physics.startSystem(ioc.Phaser.Physics.ARCADE);
    this.background = ioc.game.phaserGame.add.tileSprite(
      0,
      0,
      ioc.game.phaserGame.width,
      ioc.game.phaserGame.height,
      'background'
    );
    this.background.tileScale.setTo(0.25, 0.25);
    ioc.fieldStates.forEach(state => {
      if (state.create) state.create();
    });
  }

  update() {
    ioc.fieldStates.forEach(state => {
      if (state.update) state.update();
    });
  }

}

module.exports = new FieldState();
module.exports.FieldState = FieldState;
