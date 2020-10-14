'use strict';
function BinarySearch(arr, searchKey) {
  let low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == searchKey) return mid;
    else if (arr[mid] < searchKey) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

let myArr = [4, 8, 15, 16, 23, 42];

console.log(BinarySearch(myArr, 15));
