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
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    // console.log(node);
    // console.log('head', this.head);
    if (!this.head) {
      // only if the head is null
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        node.next = currentNode;
        this.head = node;
        return this.head;
      } else if (currentNode.next.value == value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this.head;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    // console.log(node);
    // console.log(this.head);
    if (!this.head) {
      // only if the head is null
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    // console.log(currentNode);
    while (currentNode) {
      if (currentNode.value == value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this.head;
      }
      currentNode = currentNode.next;
    }
    return this;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      // only if the head is null
      this.head = node;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    const index = this.size - k - 1;
    if (k > this.size || k < 0 || index < 0) {
      let error = 'Exception';
      console.log(error);
      return error;
    } else {
      let currentNode = this.head;
      // console.log(index);
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      // console.log(currentNode.value);
      return currentNode.value;
    }
  }
}

const ll = new LinkedList();
// ll.insert(4);
// ll.insert(5);
// ll.insert(6);
// ll.insert(7);
ll.append(112);
ll.append(10);
// ll.append(13);
// ll.append(22);
// ll.insert(2);
// ll.insertBefore(13, 15);
// console.log(ll.toString());

// ll.insertBefore(22, 110);
// ll.append(120);
// ll.includes(4);
// ll.toString();
module.exports = LinkedList;
