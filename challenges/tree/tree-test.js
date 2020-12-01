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
bst3.add(12);
bst3.add(13);
bst3.add(21);
bst3.add(23);
bst3.add(10);
bst3.add(9);
bst3.add(5);
bst3.add(1);
bst3.add(6);
bst3.add(7);
bst3.add(8);

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
const bT = new BinaryTree(one);
const bT2 = bT;
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

const merge = (t1, t2) => {
  if (!t1 && !t2) return null;
  var root = new Node((t1 ? t1.value : 0) + (t2 ? t2.value : 0));
  root.left = merge(t1 ? t1.left : null, t2 ? t2.left : null);
  root.right = merge(t1 ? t1.right : null, t2 ? t2.right : null);
  return root;
};

// console.log('Hii', merge(bst2.root, bst3.root));

var mergeTree = function (t1, t2) {
  if (!t1 && !t2) return null;
  var root = new Node((t1 ? t1.value : 0) + (t2 ? t2.value : 0));
  root.left = mergeTree(t1 ? t1.left : null, t2 ? t2.left : null);
  root.right = mergeTree(t1 ? t1.right : null, t2 ? t2.right : null);
  return root;
};

// console.log('HiiH', mergeTree(bst3.root, bst2.root));

// let t3 = mergeTrees(bst, bst2);
// console.log(t3.postOrder());

const maxDepth = (t1) => {
  let count1 = 0;
  let count2 = 0;
  const search = (node) => {
    if (node.left) {
      count1++;
      search(node.left);
    }
    if (node.right) {
      count2++;
      search(node.right);
    }
  };
  search(t1.root);
  console.log(count1, count2);
  return count2 > count1 ? count2 : count1;
};
const maxDepth2 = (t1) => {
  let max = 0;
  const search = (node, count) => {
    count++;
    if (!node.left && !node.right) {
      count > max ? (max = count) : max;
    }
    if (node.left) {
      search(node.left, count);
    }
    if (node.right) {
      search(node.right, count);
    }
  };
  search(t1.root, 0);
  return max;
};

// bst4.add(12);
// bst4.add(11);
// bst4.add(13);

const sumDepth2 = (t1, sum) => {
  let count = 0;
  let arr = [];
  const search = (node) => {
    if (!node.left && !node.right) {
      count += node.value;
      arr.push(count);
      count = 0;
    }
    if (node.left) {
      count += node.value;
      search(node.left);
    }
    if (node.right) {
      count += node.value;
      search(node.right);
    }
  };
  search(t1.root);
  console.log(arr);
};

// console.log(sumDepth(bst4));
// console.log(sumDepth2(bst4));

function pathSum(tree, target) {
  let answer = false;
  let answerPath = [];
  const _walk = (node, sum, path) => {
    sum += node.value;
    if (sum === target && !node.left && !node.right) {
      answer = true;
      path = [...path, node.value];
      answerPath.push(path);
    }
    if (node.left) {
      _walk(node.left, sum, [...path, node.value]);
    }
    if (node.right) {
      _walk(node.right, sum, [...path, node.value]);
    }
  };
  _walk(tree.root, 0, []);
  return { answer, answerPath };
}

// console.log(pathSum(bst4, 19));

const sumDepth = (t1, sum) => {
  // let count = 0;
  let arr = [];
  let arr2 = [];
  const search = (node, count, path) => {
    count += node.value;
    path = [...path, node.value];
    if (!node.left && !node.right && count === sum) {
      arr2.push(path);
      arr.push(count);
    }
    if (node.left) {
      search(node.left, count, path);
    }
    if (node.right) {
      search(node.right, count, path);
    }
  };
  search(t1.root, 0, []);
  console.log(true, arr, arr2);
};

// console.log(sumDepth(bst4, 19));
// console.log(maxDepth2(bst4));

const bst4 = new bST();
bst4.add(9);
bst4.add(10);
bst4.add(4);
bst4.add(6);
bst4.add(5);
bst4.add(7);
bst4.add(3);
bst4.add(2);
bst4.add(1);

const bst5 = new bST();
bst5.add(9);
bst5.add(10);
bst5.add(4);

const invert = (tree) => {
  const _walk = (root) => {
    let left = root.left;
    root.left = root.right;
    root.right = left;
    if (root.left) _walk(root.left);
    if (root.right) _walk(root.right);
  };
  _walk(tree.root);
  return tree;
};

console.log(invert(bst5));
console.log(invert(bst5));

const sumDepth3 = (t1) => {
  // let count = 0;
  let arr = [];
  const search = (node, count) => {
    count += node.value;
    if (!node.left && !node.right) {
      arr.push(count);
    }
    if (node.left) {
      search(node.left, count);
    }
    if (node.right) {
      search(node.right, count);
    }
  };
  search(t1.root, 0);
  return arr;
};

const minDepth = (t1) => {
  let min = 10;
  const search = (node, count) => {
    count++;
    if (!node.left && !node.right) {
      count < min ? (min = count) : min;
    }
    if (node.left) {
      search(node.left, count);
    }
    if (node.right) {
      search(node.right, count);
    }
  };
  search(t1.root, 0);
  return min;
};

console.log(minDepth(bst4));
