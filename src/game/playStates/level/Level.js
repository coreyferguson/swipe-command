
const ioc = require('../../../ioc');

class Level {

  create() {
    const gutter = 50;
    const minX = gutter;
    const maxX = ioc.game.width-gutter;
    const maxY = ioc.game.height-gutter;
    // const minY = maxY-gutter;

    // create friendly : lieutenant
    const numOfLieutenantsToCreate =
      ioc.levelService.levelEntities()['lieutenant'];
    let x = gutter;
    let y = gutter;
    let entities = [];
    let entity;
    for (let i=0; i<numOfLieutenantsToCreate; i++) {
      entity = ioc.lieutenant.spawn(x, y);
      entities.push(entity);
      x += entity.width;
      if (x > maxX) {
        x = minX;
        y += entity.height;
      }
    }
    const heightLeft = maxY - y;
    entities.forEach(entity => entity.y += heightLeft);
  }

}

module.exports = Level;
