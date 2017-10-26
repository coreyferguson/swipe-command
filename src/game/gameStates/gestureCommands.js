
const ioc = require('../../ioc');

class GestureCommands {

  reset() {
    this.gesturing = false;
  }

  update() {
    // if (this.isPointerDown()) {
    //   console.log('true');
    // } else {
    //   console.log('false');
    // }
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
