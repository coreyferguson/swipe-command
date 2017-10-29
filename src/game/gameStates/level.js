
const ioc = require('../../ioc');

class Level {

  constructor() {
    this.reset();
  }

  reset() {
    this.index = 0;
  }

  title() {
    return ioc.levels[this.index].title;
  }

  description() {
    return ioc.levels[this.index].description;
  }

}

module.exports = new Level();
module.exports.Level = Level;
