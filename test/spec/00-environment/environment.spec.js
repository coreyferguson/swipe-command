
const { expect, sinon } = require('../../support/testUtils');

describe('test environment', () => {

  it('mocha `describe` and `it` defined as globals', () => {
    // if we've made it this far without error, we're good
  });

  it('`expect` values to be compared', () => {
    expect(true).to.be.true;
    expect(true).to.not.be.false;
  });

  it('`chai-as-promised` asserts promises', () => {
    expect(new Promise(resolve => setTimeout(resolve, 50)))
      .to.eventually.be.fulfilled;
  });

  it('`sinon` spy on calls', () => {
    const spy = sinon.spy();
    spy();
    spy();
    expect(spy).to.not.be.calledOnce;
    expect(spy).to.be.calledTwice;
  });

});
