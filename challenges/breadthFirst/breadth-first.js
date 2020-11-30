'use strict';
let BreadthFirst = (tree, rootNode) => {
  let queue = [];
  let results = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    let currentNode = queue[0];
    results[results.length] = currentNode.value;
    if (currentNode.left !== null) {
      queue.push(tree[currentNode.left]);
    }

    if (currentNode.right !== null) {
      queue.push(tree[currentNode.right]);
    }
    queue.shift();
  }
  return results;
};
