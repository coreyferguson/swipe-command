
const ioc = require('../../src/ioc/container');

ioc.Phaser = require('../stubs/phaserStub');
ioc.config = require('../../src/config');
ioc.game = require('../stubs/gameStub');

// State: Field
ioc.fieldState = require('../stubs/fieldStateStub');
ioc.fieldStates = [
  new ioc.fieldState.FieldState(),
  new ioc.fieldState.FieldState()
];
