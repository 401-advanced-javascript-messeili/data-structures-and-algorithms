class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }
}

// creating tree constructor
class Tree {
  constructor(value) {
    const node = new Node(value);
    this.root = node;
  }

  traversePreorderDF(node) {
    let currentNode = !node ? this.root : node;
    if (currentNode) {
      console.log(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        this.traversePreorderDF(currentNode.children[i]);
      }
    }
  }

  traversePostorderDF(node) {
    let currentNode = !node ? this.root : node;
    if (currentNode) {
      for (let i = 0; i < currentNode.children.length; i++) {
        this.traversePostorderDF(currentNode.children[i]);
      }
      console.log(currentNode.value);
    }
  }
}

// creating 3-ary tree
const tree = new Tree('one');

tree.root.children.push(new Node('three'));
tree.root.children[0].parent = tree;

tree.root.children.push(new Node('two'));
tree.root.children[1].parent = tree;

tree.root.children.push(new Node('four'));
tree.root.children[2].parent = tree;

tree.root.children[0].children.push(new Node('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new Node('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

console.log(tree.root.children);
tree.traversePostorderDF();
console.log('-----');
tree.traversePreorderDF();
