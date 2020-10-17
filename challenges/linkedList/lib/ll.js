'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
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
    return false;
  }
  toString() {
    let str = '';
    let newNode = this.head;
    while (newNode) {
      str += `{ ${newNode.value} } -> `;
      newNode = newNode.next;
    }
    return `"${str} NULL"`;
  }
}

const ll = new LinkedList();
ll.insert(4);
ll.insert(5);
ll.insert(6);
ll.insert(7);
ll.includes(4);
ll.toString();
module.exports = LinkedList;
