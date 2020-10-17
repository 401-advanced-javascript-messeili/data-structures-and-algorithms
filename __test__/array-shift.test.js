'use strict';
const Test = require('../challenges/arrayShift/array-shift.js');
const test = new Test();
console.log(test.insertShiftArray([1, 2, 3], 5));
describe('Test function', () => {
  it('Add the number to the middle of the input array', () => {
    expect(test.insertShiftArray([1, 2, 3], 5)).toEqual([1, 2, 5, 3]);
    expect(test.insertShiftArray([1, 2, 5, 3], 5)).toEqual([1, 2, 5, 5, 3]);
  });
  it('Delete the number from the middle of the input array', () => {
    expect(test.deleteMiddleIndex([1, 2, 3])).toEqual([1, 3]);
    expect(test.deleteMiddleIndex([1, 2, 5, 3])).toEqual([1, 2, 3]);
  });
});
