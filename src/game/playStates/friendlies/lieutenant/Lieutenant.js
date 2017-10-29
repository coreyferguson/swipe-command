
const ioc = require('../../../../ioc');

class Lieutenant {

  constructor(x, y) {
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'lieutenant');
    this.sprite.scale.setTo(0.25, 0.25);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.enableBody = true;
  }

}

module.exports = Lieutenant;
