'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class kTree {
  constructor(root = null) {
    this.root = root;
  }
}

function FizzBuzzTree(kTree) {
  if (!kTree.root) {
    throw 'Empty tree';
  }

  kTree.root.value = check(kTree.root.value);

  const _walk = (node) => {
    node.children.forEach((child) => {
      child.value = check(child.value);
      _walk(child);
    });
  };

  _walk(kTree.root);

  function check(value) {
    if (value % 5 == 0 && value % 3 == 0) {
      return 'FizzBuzz';
    } else if (value % 5 == 0) {
      return 'Buzz';
    } else if (value % 3 == 0) {
      return 'Fizz';
    } else {
      return `${value}`;
    }
  }
  return kTree;
}

module.exports = { Node, kTree, fizzbuzz: FizzBuzzTree };
