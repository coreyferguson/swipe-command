
const ioc = require('../../../../ioc');

class LieutenantState {

  reset() {
    this.lieutenants = [];
  }

  preload() {
    ioc.game.phaserGame.load.image('lieutenant', 'ships/miner_100x100.png');
  }

  spawn(x, y) {
    const lieutenant = ioc.game.phaserGame.add.sprite(x, y, 'lieutenant');
    lieutenant.width = 10;
    lieutenant.height = 10;
    lieutenant.angle = -90;
    this.lieutenants.push(lieutenant);
    return lieutenant;
  }

}

module.exports = LieutenantState;
