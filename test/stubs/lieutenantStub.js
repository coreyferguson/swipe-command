
const Sprite = require('./SpriteStub');

module.exports = {
  lieutenants: [],
  spawn: (x, y) => {
    return new Sprite(x, y);
  }
};
