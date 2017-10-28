
const ioc = require('../../ioc');

class GestureCommands {

  reset() {
    this.gesturing = false;
  }

  create() {
    const style = { font: '3em Arial', fill: '#ff0044', align: 'center' };
    this.isPointerDownText = ioc.game.phaserGame.add.text(
      ioc.game.phaserGame.world.centerX,
      ioc.game.phaserGame.world.centerY,
      'isPointerDown',
      style
    );
    this.isPointerDownText.anchor.set(0.5);
    this.isPointerDownText.alpha = 0;
  }

  update() {
    if (this.isPointerDown()) {
      if (!this.gesturing) {
        ioc.game.phaserGame.add.tween(this.isPointerDownText)
          .to({ alpha: 1 }, 1000, 'Linear', true);
      }
      this.gesturing = true;
      this.pushPointers(ioc.game.phaserGame.input);
    } else {
      if (this.gesturing) {
        ioc.game.phaserGame.add.tween(this.isPointerDownText)
          .to({ alpha: 0 }, 1000, 'Linear', true);
        ioc.gestures.forEach(gesture => {
          gesture.isApplicable(this.pointers);
        });
      }
      this.gesturing = false;
      this.pointers = [];
    }
  }

  pushPointers(input) {
    let mousePointer = undefined;
    if (input.mousePointer.isDown) {
      mousePointer = {
        x: input.mousePointer.x,
        y: input.mousePointer.y
      };
    }
    let pointers = input.pointers
      .filter(pointer => pointer.isDown)
      .map(pointer => {
        return {
          x: pointer.x,
          y: pointer.y
        };
      });
    this.pointers.push({ mousePointer, pointers });
  }

  isPointerDown() {
    const mousePointer = ioc.game.phaserGame.input.mousePointer;
    const pointers = ioc.game.phaserGame.input.pointers;
    return pointers.reduce(
      (acc, pointer) => {
        return acc || pointer.isDown;
      },
      mousePointer.isDown
    );
  }

}

module.exports = new GestureCommands();
module.exports.GestureCommands = GestureCommands;
