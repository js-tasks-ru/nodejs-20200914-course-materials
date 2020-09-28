const {encode} = require('./001-caesar');

const {expect} = require('chai');

describe('caesar', () => {

  describe('encode', () => {

    it('should be a function', () => {
      expect(encode).to.be.a('function') // typeof
    });

    it('should encode capital English letters', () => {
      // arrange
      const shift = 1;
      const input = 'ABC';
      const expected = 'BCD';

      // act
      const actual = encode(shift, input);

      // assert
      expect(actual).to.be.equal(expected);
    });

    it('should encode lower-case English letters', () => {
      // arrange
      const shift = 1;
      const input = 'abc';
      const expected = 'bcd';

      // act
      const actual = encode(shift, input);

      // assert
      expect(actual).to.be.equal(expected);
    });

  });

  describe.skip('decode', () => {

  });

});
