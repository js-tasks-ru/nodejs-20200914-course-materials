const sinon = require('sinon');
const {expect} = require("chai");

const retry = require('./004-retry');

describe('retry', () => {

  // after
  // before

  // beforeEach
  afterEach(() => {
    sinon.restore();
  });

  it('should call passed function and return it\'s result if any', async () => {
    const expected = 4;
    const timeout = 0;
    const self = {};
    const args = [1, 2, 3];
    const fn = sinon.stub().returns(expected)

    const actual = await retry(timeout, fn, self, ...args);

    expect(actual).to.be.equal(expected);

    expect(fn).calledOnce
    expect(fn.firstCall).calledOn(self)
    expect(fn.firstCall).calledWithExactly(...args)
  });

  it('should call passed function second time if error has been returned after the first call', async () => {
    const expected = 4;
    const timeout = 0;
    const self = {};
    const args = [1, 2, 3];
    const fn = sinon.stub()
      .onFirstCall().throws(new Error)
      .onSecondCall().returns(expected);

    const actual = await retry(timeout, fn, self, ...args);

    expect(actual).to.be.equal(expected);
    expect(fn).calledTwice
  });

  it('should call the function second time after specified amount of time', async () => {
    const expected = 4;
    const timeout = 1000000;
    const self = {};
    const args = [1, 2, 3];
    const fn = sinon.stub()
      .onFirstCall().throws(new Error)
      .onSecondCall().returns(expected);

    const timers = sinon.useFakeTimers();

    const actualP = retry(timeout, fn, self, ...args);

    await Promise.resolve();

    timers.next();
    // timers.tick(timeout);

    const actual = await actualP

    expect(actual).to.be.equal(expected);
    expect(fn).calledTwice
  });
});
