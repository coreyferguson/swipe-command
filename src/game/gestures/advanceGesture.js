
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
    return false;
  }

  apply() {
  }

}

module.exports = new AdvanceGesture();
