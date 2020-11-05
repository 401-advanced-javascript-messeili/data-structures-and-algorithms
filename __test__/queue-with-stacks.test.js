'use strict';
let PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

let queue = new PseudoQueue();

describe('Queues Test', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue1 = queue.enqueue(5);
    expect(queue1.stack.top.value).toEqual(5);
  });

  it('Can successfully dequeue from stack', () => {
    queue = new PseudoQueue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.stack.top).toBeNull();
  });

  it('Calling dequeue empty stack raises exception', () => {
    queue = new PseudoQueue();
    expect(queue.dequeue()).toEqual('Stack is empty');
  });
});
