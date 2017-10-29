
const ioc = require('../../ioc');

class Level {

  reset() {
    this.index = 0;
  }

  create() {
  }

  ////               ////
  // getters / setters //
  ////               ////

  title() {
    return ioc.levels[this.index].title;
  }

  description() {
    return ioc.levels[this.index].description;
  }

}

module.exports = Level;
