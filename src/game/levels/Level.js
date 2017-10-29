
const ioc = require('../../ioc');

class Level {

  constructor() {
    this.index = 0;
  }

  title() {
    return ioc.levels[this.index].title;
  }

  description() {
    return ioc.levels[this.index].description;
  }

}

module.exports = Level;
