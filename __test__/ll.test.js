'use strict';

const { expect } = require('@jest/globals');
const LL = require('../challenges/linkedList/lib/ll.js');

describe('Linked List', () => {
  it('Constructor()', () => {
    const list = new LL();
    expect(list.head).toBeNull();
  });

  it('insert()', () => {
    const list = new LL();
    const initValue = 6;
    list.insert(initValue);
    expect(list.head.value).toEqual(initValue);
    const newValue = 7;
    list.insert(newValue);
    expect(list.head.value).toEqual(newValue);
    expect(list.head.next.value).toEqual(initValue);

    let currentNode = list.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.next).toBeNull();
  });
  it('include()', () => {
    const list = new LL();
    const initValue = 6;
    list.insert(initValue);

    expect(list.includes(initValue)).toBeTruthy();
    expect(list.includes(150)).toBeFalsy();
  });
  it('toString()', () => {
    const list = new LL();
    const initValue = 6;
    const newValue = 7;
    list.insert(initValue);
    list.insert(newValue);
    console.log(list.toString());

    expect(list.toString()).toEqual(`"{ 7 } -> { 6 } ->  NULL"`);
  });
});
