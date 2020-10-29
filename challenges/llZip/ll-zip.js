'use strict';
const Ll = require('../linkedList/lib/ll.js');

function zip(l1, l2) {
  let l3 = new Ll();
  let currentNode1 = l1.head;
  let currentNode2 = l2.head;
  while (currentNode1 || currentNode2) {
    if (currentNode1) {
      l3.append(currentNode1.value);
      currentNode1 = currentNode1.next;
    }
    if (currentNode2) {
      l3.append(currentNode2.value);
      currentNode2 = currentNode2.next;
    }
  }
  return l3;
}
//tests
// let l1 = new Ll();
// let l2 = new Ll();
// l1.insert(1);
// l1.insert(2);
// l1.insert(3);
// l1.insert(4);
// l1.insert(5);
// l1.insert(6);
// l2.insert(10);
// l2.insert(20);
// l2.insert(30);
// let l3 = zip(l1, l2);
// l1.toString();
// l2.toString();
// l3.toString();

module.exports = zip;
