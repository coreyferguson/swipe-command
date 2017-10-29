
const ioc = require('./container');

ioc.Phaser = Phaser;
ioc.config = require('../config');
ioc.game = require('../game');

// Phaser States
ioc.PlayState = require('../game/states/PlayState');
ioc.PlaySplashState = require('../game/states/PlaySplashState');

// Levels
ioc.level = require('../game/playStates/level');
ioc.levels = [
  require('../game/levels/001.json')
];

// Gestures
ioc.gestures = [
  require('../game/gestures/selectGroup1Gesture'),
  require('../game/gestures/advanceGesture'),
  require('../game/gestures/retreatGesture')
];

// Play States
ioc.playStates = [
  require('../game/playStates/level'),
  require('../game/playStates/gestures'),
  require('../game/playStates/friendlies/lieutenant')
];

