
const ioc = require('./ioc');
require('./ioc/config');

class SwipeCommand {
  constructor(width, height, parent) {
    ioc.game.start(width, height, parent);
  }
}

module.exports = SwipeCommand;
