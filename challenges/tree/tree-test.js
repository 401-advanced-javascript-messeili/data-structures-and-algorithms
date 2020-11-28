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

  //root-left-right
  preOrder() {
    let results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  //left-root-right
  inOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  //left-right-root
  postOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class bST {
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
      if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return this;
        } else if (node.right) {
          return searchTree(node.right);
        }
      } else if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return this;
        } else if (node.left) {
          return searchTree(node.left);
        }
      }
    };
    return searchTree(node);
  }

  // contains(value) {
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (value === currentNode.value) {
  //       return true;
  //     }
  //     if (value < currentNode.value) {
  //       currentNode = currentNode.left;
  //     } else {
  //       currentNode = currentNode.right;
  //     }
  //   }
  //   return false;
  // }

  //   contains(value) {
  //     const search = (node) => {
  //       if (!node) {
  //         return false;
  //       }
  //       if (node.value === value) {
  //         return true;
  //       }
  //       if (value > node.value) {
  //         if (node.right) {
  //           return search(node.right);
  //         }
  //       }
  //       if (value < node.value) {
  //         if (node.left) {
  //           return search(node.left);
  //         }
  //       }
  //       return false;
  //     };
  //     // return false;
  //     return search(this.root);
  //   }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.value == value) {
          return true;
        }
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  findBeforeMax() {
    let currentNode = this.root;
    let pre;
    while (currentNode.right) {
      pre = currentNode;
      currentNode = currentNode.right;
    }
    if (!currentNode.left) {
      return 'pre', pre.value;
    } else if (currentNode.left && !currentNode.left.right) {
      return 'pre', currentNode.left.value;
    } else {
      currentNode = currentNode.right;
      while (currentNode.right) {
        currentNode = currentNode.right;
      }
      return 'pre', currentNode.value;
    }
    // return currentNode.value;
  }

  findMax() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  findMin() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  breadthFirst() {
    let results = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return results;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }
      if (value === node.value) {
        //no children
        if (!node.left && !node.right) {
          return null;
        }
        // no left child
        if (!node.left) {
          return node.right;
        }
        //no right child
        if (!node.right) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  preOrder() {
    let results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }
  //left-root-right
  inOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  //left-right-root
  postOrder() {
    let results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

const bst = new bST();
bst.add(10);
bst.add(11);
bst.add(8);
bst.add(81);
bst.add(999);
bst.add(929);
bst.add(9199);
bst.add(22);
bst.add(6);
const bst2 = new bST();
bst2.add(9);
bst2.add(12);
bst2.add(21);
bst2.add(23);
const bst3 = new bST();
bst3.add(9);
bst3.add(12);
bst3.add(21);
bst3.add(23);

// console.log(bst.add(8));
// console.log(bst.contains(10));
// console.log(bst.contains(11));
// console.log(bst.contains(8));
// console.log(bst.contains(5));
// console.log(bst.contains(80));
// console.log(bst.contains(99));
// console.log(bst.contains(22));
// console.log(bst.contains(6));
// console.log(bst.contains(888));
// console.log(bst.findMax());
// console.log(bst.findMin());
// console.log(bst.breadthFirst());

const one = new Node(2);
const two = new Node(3);
const three = new Node(4);
const four = new Node(5);
const five = new Node(6);
const six = new Node(7);
const seven = new Node(8);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
// const bT = new BinaryTree(one);
// console.log(bT.preOrder());
// console.log(bT.inOrder());
// console.log(bT.postOrder());
const compare = (t1, t2) => {
  let counter = 0;
  const search = (node) => {
    if (!node.left && !node.right) counter++;
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  };
  search(t1.root);
  let counter2 = counter;
  counter = 0;
  search(t2.root);
  if (counter == counter2) {
    return true;
  } else return false;
};
console.log('compare', compare(bst3, bst2));

const sumOdd = (tree) => {
  let sum = 0;
  const search = (node) => {
    if (node.value % 2 !== 0) sum += node.value;
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  };
  search(tree.root);
  return sum;
};
console.log('sum', sumOdd(bst2));

const mergeTrees = (t1, t2) => {
  const t3 = new bST();
  let cN1 = t1.root;
  let cN2 = t2.root;
  const search = (node) => {
    if (node.left) search(node.left);
    if (node.right) search(node.right);
    t3.add(node.value);
  };
  search(cN1);
  search(cN2);
  return t3;
};

let t3 = mergeTrees(bst, bst2);
console.log(t3.postOrder());
