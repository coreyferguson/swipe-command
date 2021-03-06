
const ioc = require('../../ioc');

class SelectGroup1Gesture {

  getName() {
    return 'Select Group 1';
  }

  addKeyboardListeners(keyboard, callback) {
    const key = keyboard.addKey(ioc.Phaser.KeyCode.ONE);
    key.onUp.add(() => {
      callback(this);
    });
  }

  isGestureApplicable(pointers) {
    let sX, sY; // smallest x and y
    let lX, lY; // largest x and y
    pointers.forEach(pointer => {
      pointer.pointers.forEach(pointer => {
        if (sX === undefined || sX > pointer.x) sX = pointer.x;
        if (sY === undefined || sY > pointer.y) sY = pointer.y;
        if (lX === undefined || lX < pointer.x) lX = pointer.x;
        if (lY === undefined || lY < pointer.y) lY = pointer.y;
      });
    });
    const boxWidth = lX-sX;
    const boxHeight = lY-sY;
    return (boxWidth < 10 && boxHeight < 10);
  }

  apply() {
  }

}

module.exports = new SelectGroup1Gesture();
