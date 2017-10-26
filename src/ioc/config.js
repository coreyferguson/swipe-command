
const ioc = require('./container');

container.config = require('../config');
container.game = require('../game');

// State: Field
container.fieldState = require('../game/phaserStates/fieldState');
container.fieldStates = [];
