'use strict';

const { Node, kTree, fizzbuzz } = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
let testTree;
describe('FizzBuzzTree', () => {
  beforeEach(() => {
    const one = new Node(1);
    const two = new Node(15);
    const three = new Node(3);
    const four = new Node(5);
    const five = new Node(2);
    const six = new Node(7);

    one.children.push(two, three, four, five);
    four.children.push(six);

    testTree = new kTree(one);
  });
  it('fizzbuzz function throw error if tree is empty', () => {
    const tree = new kTree();
    expect(() => {
      fizzbuzz(tree);
    }).toThrow();
  });
  it('fizzbuzz function return tree', () => {
    fizzbuzz(testTree);
    expect(testTree.root.value).toEqual('1');
    expect(testTree.root.children[0].value).toEqual('FizzBuzz');
  });
});
