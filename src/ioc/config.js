
const ioc = require('./container');

ioc.Phaser = Phaser;
ioc.config = require('../config');
ioc.game = require('../game');

// Level
ioc.level = require('../game/gameStates/level');
ioc.levels = [
  require('../game/levels/001.json')
];
ioc.levelSplashState = require('../game/phaserStates/levelSplashState');

// Gestures
ioc.gestureCommands = require('../game/gameStates/gestureCommands');
ioc.gestures = [
  require('../game/gestures/selectGroup1Gesture'),
  require('../game/gestures/advanceGesture'),
  require('../game/gestures/retreatGesture')
];

// State: Field
ioc.fieldState = require('../game/phaserStates/fieldState');
ioc.fieldStates = [
  require('../game/gameStates/gestureCommands')
];
