
const ioc = require('./ioc');
require('./ioc/config');

class SwipeCommand {
  constructor(defaultWidth, defaultHeight, parent) {
    ioc.game.start(defaultWidth, defaultHeight, parent);
  }
}

module.exports = SwipeCommand;
