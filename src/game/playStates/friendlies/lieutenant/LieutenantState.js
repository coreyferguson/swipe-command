
const ioc = require('../../../../ioc');

class LieutenantGameState {

  preload() {
    ioc.game.phaserGame.load.image('lieutenant', 'ships/miner_100x100.png');
  }

}

module.exports = LieutenantGameState;
