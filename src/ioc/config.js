
const ioc = require('./container');

ioc.Phaser = Phaser;
ioc.config = require('../config');
ioc.game = require('../game');

// State: Field
ioc.fieldState = require('../game/phaserStates/fieldState');
ioc.fieldStates = [
  require('../game/gameStates/gestureCommands')
];

ioc.gestures = [
  require('../game/gestures/selectGroup1Gesture'),
  require('../game/gestures/advanceGesture'),
  require('../game/gestures/retreatGesture')
];
