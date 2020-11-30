'use strict';
const HashTable = require('../hashtable/hashtable').HashMap;
const LinkedList = require('../hashtable/hashtable').LinkedList;

const tree_intersection = (bT1, bT2) => {
  let arr = [];
  let arr1 = bT1.preOrder();
  let arr2 = bT2.preOrder();
  console.log(arr1, arr2);
  const hashtable = new HashTable(arr1.length * 10);
  for (let i = 0; i < arr1.length; i++) {
    const index = hashtable.hash(`${arr1[i]}`);
    console.log(index);
    if (!hashtable.storage[index]) {
      const ll = new LinkedList();
      ll.prepend(arr1[i]);
      hashtable.storage[index] = ll;
    } else {
      hashtable.storage[index].prepend(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const index = hashtable.hash(`${arr2[i]}`);
    if (!hashtable.storage[index]) {
      const ll = new LinkedList();
      ll.prepend(arr2[i]);
      hashtable.storage[index] = ll;
    } else if (hashtable.storage[index].head.value === arr2[i]) {
      if (!arr.includes(arr2[i])) {
        arr.push(arr2[i]);
      }
    }
  }
  return arr;
};

module.exports = tree_intersection;
