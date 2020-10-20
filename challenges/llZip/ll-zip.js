'use strict';
const Ll = require('../linkedList/lib/ll.js');
let l1 = new Ll();
let l2 = new Ll();

l1.insert(1);
l1.insert(2);
l1.insert(6);
l2.insert(3);
l2.insert(2);
l1.toString();
l2.toString();

class TestFun {
  zip(l1, l2) {
    const index1 = l1.size;
    const index2 = l2.size;
    const index = index1 + index2 - 1;
    let l3 = new Ll();
    let currentNode1 = l1.head;
    let currentNode2 = l2.head;
    console.log(currentNode2);
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
}

const testFun = new TestFun();
let l3 = testFun.zip(l1, l2);
l3.toString();
