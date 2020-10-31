'use strict';
let Stack = require('../stacksAndQueues/stacks-and-queues').Stack;
class PseudoQueue {
  constructor() {
    this.stack = new Stack();
    this.secStack = new Stack();
  }
  enqueue(value) {
    this.stack.push(value);
    return this;
  }

  dequeue() {
    if (this.secStack.isEmpty()) {
      while (!this.stack.isEmpty()) {
        this.secStack.push(this.stack.pop());
      }
    }
    return this.secStack.pop();
  }
}

module.exports = PseudoQueue;
