
const { expect } = require('../../support/testUtils');

describe('test environment', () => {

  it('mocha `describe` and `it` defined as globals', () => {
    // if we've made it this far without error, we're good
  });

  it('`expect` values to be compared', () => {
    expect(true).to.be.true;
    expect(true).to.not.be.false;
  });

});
