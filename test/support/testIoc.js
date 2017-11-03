
const ioc = require('../../src/ioc/container');

ioc.Phaser = require('../stubs/phaserStub');
ioc.config = require('../../src/config');
ioc.game = require('../stubs/gameStub');
ioc.level = require('../stubs/levelStub');
ioc.levelService = require('../../src/game/levels/levelService');
ioc.levels = require('../stubs/levelsStub');
ioc.lieutenant = require('../stubs/lieutenantStub');

// State: Field
ioc.PlayState = require('../stubs/playStateStub');
ioc.playStates = [
  new ioc.PlayState(),
  new ioc.PlayState()
];
