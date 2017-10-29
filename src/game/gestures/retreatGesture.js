
const ioc = require('../../ioc');

class RetreatGesture {

  getName() {
    return 'Retreat';
  }

  addKeyboardListeners(keyboard, callback) {
    const key = keyboard.addKey(ioc.Phaser.KeyCode.DOWN);
    key.onUp.add(() => callback(this));
  }

  /* eslint no-unused-vars: "off" */
  isGestureApplicable(pointers) {
    if (
      !pointers ||
      !pointers[0] ||
      !pointers[0].pointers ||
      !pointers[0].pointers[0]) {
      return false;
    }

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
    const firstY = pointers[0].pointers[0].y;
    const lastY = pointers[pointers.length-1].pointers[0].y;
    const boxWidth = lX-sX;
    const boxHeight = lY-sY;
    const aspectRatio = boxWidth / boxHeight;
    return (boxWidth < 60 && aspectRatio < 0.5 && lastY > firstY);
  }

  apply() {
  }

}

module.exports = new RetreatGesture();
