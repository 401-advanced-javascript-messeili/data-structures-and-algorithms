'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }

  peak() {
    return this.top;
  }
  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }
  pop() {
    const item = this.storage.shift();
    this.top = this.storage[0] ? this.storage[0] : null;
    return item;
  }
}
