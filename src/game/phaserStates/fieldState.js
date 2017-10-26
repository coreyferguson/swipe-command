
const ioc = require('../../ioc');

class FieldState {

  preload() {
    ioc.game.phaserGame.load.crossOrigin = 'anonymous';
    ioc.game.phaserGame.load.baseURL = ioc.config.assetsBaseUrl;
    ioc.fieldStates.forEach(state => {
      if (state.preload) state.preload();
    });
  }

  create() {
    ioc.game.phaserGame.physics.startSystem(Phaser.Physics.ARCADE);
    ioc.game.phaserGame.world.setBounds(
      ioc.cosmos.init.bounds.x,
      ioc.cosmos.init.bounds.y,
      ioc.cosmos.init.bounds.width,
      ioc.cosmos.init.bounds.height
    );
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
