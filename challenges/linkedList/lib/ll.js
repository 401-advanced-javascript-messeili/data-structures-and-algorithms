'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this;
  }
  includes(value) {
    let newNode = this.head;
    while (newNode) {
      if (newNode.value === value) {
        console.log(true);
        return true;
      } else {
        newNode = newNode.next;
      }
    }
    console.log(false);
    return false;
  }
  toString() {
    let str = '';
    let newNode = this.head;
    while (newNode) {
      str += `{ ${newNode.value} } -> `;
      newNode = newNode.next;
    }
    console.log(`"${str} NULL"`);
    return `"${str} NULL"`;
  }
}

const ll = new LinkedList();
// ll.insert(4);
ll.insert(4);
ll.insert(5);
ll.insert(6);
ll.insert(7);
ll.insert(8);
ll.insert(9);
ll.insert(10);
ll.insert(11);
ll.insert(12);
ll.includes(111);
ll.toString();
module.exports = LinkedList;
