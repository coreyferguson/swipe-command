
class SpriteStub {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.events = {
      onInputDown: {
        add: () => {}
      }
    };
  }
}

module.exports = SpriteStub;
