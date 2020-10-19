'use strict';
const Test = require('../challenges/arrayBinarySearch/array-binary-search.js');
const test = new Test();
describe('Test function', () => {
  const tempArr = [1, 5, 6, 9, 11];
  it('return the index of the input number', () => {
    expect(test.binarySearch(tempArr, 5)).toEqual(1);
    expect(test.binarySearch(tempArr, 11)).toEqual(4);
  });
});
