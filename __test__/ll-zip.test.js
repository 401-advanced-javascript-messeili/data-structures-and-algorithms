'use strict';

const { expect } = require('@jest/globals');
const LL = require('../challenges/linkedList/lib/ll.js');
const Node = require('../challenges/linkedList/lib/node.js');

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
  it('append()', () => {
    const list = new LL();
    list.insert(10);
    list.insert(11);
    list.append(12);
    let currentNode = list.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual(12);
    expect(currentNode.next).toBeNull();
  });
  it('insertBefore()', () => {
    const list = new LL();
    list.insert(10);
    list.insert(12);
    list.insertBefore(12, 11);
    let currentNode = list.head;
    const node = new Node(11);

    while (currentNode) {
      if (currentNode.value == 12) {
        node.next = currentNode;
        this.head = node;
        break;
      } else if (currentNode.next.value == 12) {
        expect(currentNode.next.value).toEqual(12);
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual(11);
  });
  it('insertAfter()', () => {
    const list = new LL();
    list.insert(10);
    list.insert(12);
    list.insertAfter(12, 13);
    let currentNode = list.head;
    const node = new Node(13);

    while (currentNode) {
      if (currentNode.value == 12) {
        expect(currentNode.value).toEqual(12);
        node.next = currentNode.next;
        currentNode.next = node;
        expect(currentNode.next.value).toEqual(13);
        return this.head;
      }
      currentNode = currentNode.next;
    }
  });
});
