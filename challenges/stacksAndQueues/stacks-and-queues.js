'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    // console.log(this);
    return this;
  }

  pop() {
    if (!this.top) {
      return `Stack is empty`;
    }
    let removedValue = this.top.value;
    this.top = this.top.next;
    // console.log(this);
    return removedValue;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (!this.top) {
      return `Stack is empty`;
    }
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      return this;
    }
    let currentNode = this.front;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  dequeue() {
    if (!this.front) {
      return 'Queue is empty';
    }
    if (!this.front.next) {
      let removedNode = this.front.value;
      this.front = null;
      return removedNode;
    }
    let removedNode = this.front.value;
    this.front = this.front.next;
    return removedNode;
  }

  peek() {
    if (!this.front) {
      return 'Queue is empty';
    }
    return this.front.value;
  }

  isEmpty() {
    return !this.front ? true : false;
  }
}

//tests
// newQueue.enqueue(1);
// newQueue.enqueue(2);
// console.log(newQueue.dequeue());
// console.log(newQueue.dequeue());

// console.log(newQueue.peek());
// console.log(newQueue.isEmpty());

// newStack.push(7);
// newStack.push(8);
// newStack.pop();
// console.log(newStack.peek());
// console.log(newStack.isEmpty());

module.exports = { Stack, Queue };
