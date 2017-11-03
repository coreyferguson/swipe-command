
const ioc = require('./container');

ioc.Phaser = Phaser;
ioc.config = require('../config');
ioc.game = require('../game');

// Phaser States
ioc.PlayState = require('../game/states/PlayState');
ioc.PlaySplashState = require('../game/states/PlaySplashState');

// Levels
ioc.level = require('../game/playStates/level');
ioc.levelService = require('../game/levels/levelService');
ioc.levels = [
  require('../game/levels/001.json')
];

ioc.lieutenant = require('../game/playStates/friendlies/lieutenant');
ioc.levelEntities = [
  ioc.lieutenant
];

// Gestures
ioc.gesture = require('../game/playStates/gesture');
ioc.gestures = [
  require('../game/gestures/selectGroup1Gesture'),
  require('../game/gestures/advanceGesture'),
  require('../game/gestures/retreatGesture')
];

// Play States
ioc.playStates = [
  ioc.level,
  ioc.gesture,
  ioc.lieutenant
];

