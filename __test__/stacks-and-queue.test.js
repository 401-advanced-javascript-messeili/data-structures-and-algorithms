'use strict';
let Stack = require('../challenges/stacksAndQueues/stacks-and-queues').Stack;
let Queue = require('../challenges/stacksAndQueues/stacks-and-queues').Queue;

let stackClass = new Stack();
let queueClass = new Queue();

describe('Stacks Test', () => {
  it('can successfully push into a stack', () => {
    stackClass = new Stack();
    let stack = stackClass.push(5);
    expect(stack.top.value).toEqual(5);
  });
  it('Can successfully push multiple values onto a stack', () => {
    stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    let stack = stackClass.push(5);
    expect(stack.top.value).toEqual(5);
  });
  it('Can successfully pop off the stack', () => {
    stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    stackClass.pop();
    expect(stackClass.pop()).toEqual(2);
    expect(stackClass.top.value).toEqual(1);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    stackClass.pop();
    stackClass.pop();
    stackClass.pop();

    expect(stackClass.top).toEqual(null);
  });
  it('Can successfully peek the next item on the stack', () => {
    stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    expect(stackClass.peek()).toEqual(3);
  });
  it('Can successfully instantiate an empty stack', () => {
    stackClass = new Stack();
    expect(stackClass).toBeInstanceOf(Stack);
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    stackClass = new Stack();
    expect(stackClass.peek()).toEqual('Stack is empty');
    expect(stackClass.pop()).toEqual('Stack is empty');
  });
});

describe('Queues Test', () => {
  it('Can successfully enqueue into a queue', () => {
    queueClass = new Queue();
    let queue = queueClass.enqueue(5);
    expect(queue.front.value).toEqual(5);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    queueClass = new Queue();
    queueClass.enqueue(5);
    let queue = queueClass.enqueue(6);
    expect(queue.front.value).toEqual(5);
    expect(queue.front.next.value).toEqual(6);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    queueClass = new Queue();
    queueClass.enqueue(5);
    queueClass.enqueue(6);
    expect(queueClass.dequeue()).toEqual(5);
    expect(queueClass.front.value).toEqual(6);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    queueClass = new Queue();
    queueClass.enqueue(5);
    queueClass.enqueue(6);
    expect(queueClass.peek()).toEqual(5);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    queueClass = new Queue();
    queueClass.enqueue(5);
    queueClass.enqueue(6);
    queueClass.enqueue(6);
    queueClass.dequeue();
    queueClass.dequeue();
    queueClass.dequeue();
    expect(queueClass.front).toBeNull();
  });
  it('Can successfully instantiate an empty queue', () => {
    stackClass = new Stack();
    expect(queueClass).toBeInstanceOf(Queue);
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    queueClass = new Queue();
    expect(queueClass.peek()).toEqual('Queue is empty');
    expect(queueClass.dequeue()).toEqual('Queue is empty');
  });
});
