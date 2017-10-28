
const ioc = require('../../ioc');

class AdvanceGesture {

  getName() {
    return 'Advance';
  }

  addKeyboardListeners(keyboard, callback) {
    const key = keyboard.addKey(ioc.Phaser.KeyCode.UP);
    key.onUp.add(() => callback(this));
  }

  /* eslint no-unused-vars: "off" */
  isGestureApplicable(pointers) {
    let singlePointer = true;
    let sX, sY; // smallest x and y
    let lX, lY; // largest x and y
    pointers.forEach(pointer => {
      if (pointer.pointers.length > 1) singlePointer = false;
      pointer.pointers.forEach(pointer => {
        if (sX === undefined || sX > pointer.x) sX = pointer.x;
        if (sY === undefined || sY > pointer.y) sY = pointer.y;
        if (lX === undefined || lX < pointer.x) lX = pointer.x;
        if (lY === undefined || lY < pointer.y) lY = pointer.y;
      });
    });
    const boxWidth = lX-sX;
    const boxHeight = lY-sY;
    const aspectRatio = boxWidth / boxHeight;
    return (boxWidth < 60 && aspectRatio < 0.5);
  }

  apply() {
  }

}

module.exports = new AdvanceGesture();
