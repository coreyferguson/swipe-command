
const ioc = require('../../ioc');

class LevelSplashState extends ioc.Phaser.State {

  constructor() {
    super();
    this.pointerState = undefined;
  }

  create() {
    const texts = [];
    const title = ioc.levelService.title();
    const titleText = ioc.game.phaserGame.add.text(
      ioc.game.phaserGame.world.centerX,
      ioc.game.phaserGame.world.centerY,
      title,
      { font: '3em Arial', fill: '#ff0044', align: 'center' }
    );
    texts.push(titleText);
    const description = ioc.levelService.description();
    const descriptionText = ioc.game.phaserGame.add.text(
      ioc.game.phaserGame.world.centerX,
      ioc.game.phaserGame.world.centerY+50,
      description,
      { font: '2em Arial', fill: '#ff0044', align: 'center' }
    );
    texts.push(descriptionText);

    texts.forEach(text => {
      text.anchor.set(0.5, 0);
      text.alpha = 0;
      ioc.game.phaserGame.add.tween(text)
        .to({ alpha: 1.0 }, 1000, 'Linear')
        .start();
    });
  }

  update() {
    const pointer = ioc.game.phaserGame.input.activePointer;
    if (pointer && pointer.isDown) {
      this.pointerState = 'down';
    } else if (this.pointerState === 'down' && pointer.isUp) {
      this.pointerState = 'up';
      ioc.game.phaserGame.state.start('playState');
    }
  }

}

module.exports = LevelSplashState;
