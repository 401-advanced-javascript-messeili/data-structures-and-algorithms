'use strict';

class Test {
  insertShiftArray(arr, num) {
    let middleIndex = Math.ceil(arr.length / 2);

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (i == middleIndex) {
        newArr.push(num);
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  deleteMiddleIndex(arr) {
    let middleIndex = Math.floor(arr.length / 2);

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (i !== middleIndex) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}

module.exports = Test;
