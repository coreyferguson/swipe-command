
const ioc = require('../../ioc');

class LevelService {

  constructor() {
    this.index = 0;
  }

  title() {
    return ioc.levels[this.index].title;
  }

  description() {
    return ioc.levels[this.index].description;
  }

  levelEntities() {
    return ioc.levels[this.index].levelEntities;
  }

}

module.exports = new LevelService();
module.exports.LevelService = LevelService;
