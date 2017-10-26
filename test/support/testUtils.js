
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);

module.exports = {}
module.exports.expect = chai.expect;
module.expect.sinon = sinon;
