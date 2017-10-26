
const ioc = require('./container');

ioc.config = require('../config');
ioc.game = require('../game');

// State: Field
ioc.fieldState = require('../game/phaserStates/fieldState');
ioc.fieldStates = [];
