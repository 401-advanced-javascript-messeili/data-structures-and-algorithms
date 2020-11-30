'use strict';
const Tree = require('../challenges/tree/tree').BinaryTree;
const Node = require('../challenges/tree/tree').Node;
const tree_intersection = require('../challenges/treeIntersection/tree-intersection');
const one = new Node(3);
const two = new Node(7);
const three = new Node(5);
const four = new Node(2);
const five = new Node(6);
const six = new Node(9);
const seven = new Node(5);
const eight = new Node(11);
const nine = new Node(4);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
five.left = seven;
five.right = eight;
six.left = nine;
let tree = new Tree(one);
const one2 = new Node(5);
const two2 = new Node(6);
const three3 = new Node(7);
const four4 = new Node(3);
const five5 = new Node(5);
const six6 = new Node(6);
const seven7 = new Node(5);
const eight8 = new Node(1);
const nine9 = new Node(11);
one2.left = two2;
one2.right = three3;
two2.left = four4;
two2.right = five5;
three3.right = six6;
five5.left = seven7;
five5.right = eight8;
six6.left = nine9;
let tree2 = new Tree(one2);

describe('Tree intersection test', () => {
  it('can successfully return an array of repeated values between the two arrays', () => {
    let result = tree_intersection(tree, tree2);
    expect(result).toEqual([5, 6, 3, 7, 11]);
  });
});
