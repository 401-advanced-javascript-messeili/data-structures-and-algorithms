'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // ROOT - LEFT - RIGHT
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  //  LEFT- ROOT - RIGHT
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  // LEFT - RIGHT - ROOT
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    const node = this.root;
    if (!node) {
      this.root = new Node(value);
      return this;
    }
    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return this;
        } else if (node.left) {
          return searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return this;
        } else if (node.right) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    searchTree(node);
  }

  findMaximumValue() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
//Test
// const bt = new BinarySearchTree();
// bt.add(1);
// bt.add(2);
// bt.add(5);
// bt.add(10);
// bt.findMaximumValue();

module.exports = { BinaryTree, BinarySearchTree, Node };
