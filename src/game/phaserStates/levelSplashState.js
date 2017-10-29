
const ioc = require('../../ioc');

class LevelSplashState {

  reset() {
    this.pointerState = undefined;
  }

  create() {
    const title = ioc.level.title();
    const style = { font: '3em Arial', fill: '#ff0044', align: 'center' };
    const titleText = ioc.game.phaserGame.add.text(
      ioc.game.phaserGame.world.centerX,
      ioc.game.phaserGame.world.centerY,
      title,
      style
    );
    titleText.anchor.set(0.5, 0);
    titleText.alpha = 0;
    ioc.game.phaserGame.add.tween(titleText)
      .to({ alpha: 1.0 }, 1000, 'Linear')
      .start();
  }

  update() {
    const pointer = ioc.game.phaserGame.input.activePointer;
    if (pointer && pointer.isDown) {
      this.pointerState = 'down';
    } else if (this.pointerState === 'down' && pointer.isUp) {
      this.pointerState = 'up';
      ioc.game.phaserGame.state.start('fieldState');
    }
  }

}

module.exports = new LevelSplashState();
module.exports.LevelSplashState = LevelSplashState;
