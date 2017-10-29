
const ioc = require('../../src/ioc/container');

ioc.Phaser = require('../stubs/phaserStub');
ioc.config = require('../../src/config');
ioc.game = require('../stubs/gameStub');

// State: Field
ioc.PlayState = require('../stubs/playStateStub');
ioc.playStates = [
  new ioc.PlayState(),
  new ioc.PlayState()
];
