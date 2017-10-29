
const ioc = require('../../ioc');

class GestureCommands {

  reset() {
    this.gesturing = false;
  }

  create() {
    const style = { font: '3em Arial', fill: '#ff0044', align: 'center' };
    this.gestureText = ioc.game.phaserGame.add.text(
      ioc.game.phaserGame.world.centerX,
      0,
      'gestureText',
      style
    );
    this.gestureText.anchor.set(0.5, 0);
    this.gestureText.alpha = 0;

    const keyboard = ioc.game.phaserGame.input.keyboard;
    ioc.gestures.forEach(gesture => {
      gesture.addKeyboardListeners(keyboard, gesture => {
        this.applyGesture(gesture);
      });
    });
  }

  update() {
    if (this.isPointerDown()) {
      this.gesturing = true;
      this.pushPointers(ioc.game.phaserGame.input);
    } else {
      if (this.gesturing) {
        // console.log(JSON.stringify(this.pointers));
        ioc.gestures.forEach(gesture => {
          if (gesture.isGestureApplicable(this.pointers)) {
            this.applyGesture(gesture);
          }
        });
      }
      this.gesturing = false;
      this.pointers = [];
    }
  }

  applyGesture(gesture) {
    gesture.apply();
    this.gestureText.setText(gesture.getName());
    ioc.game.phaserGame.add.tween(this.gestureText)
      .to({ alpha: 1.0 }, 200, 'Linear')
      .to({ alpha: 0.0 }, 1000, 'Linear')
      .start();
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
