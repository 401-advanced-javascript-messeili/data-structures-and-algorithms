function FizzBuzzTree(tree) {
  const results = [];
  const _walk = (node) => {
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);

    // while (node.right || node.left) {
    //   if (node.left) {
    //     newQueue.enqueue(node.left);
    //   } else if (node.right) {
    //     newQueue.enqueue(node.right);
    //   }
    //   node = node.left;
    // }
  };

  _walk(this.root);
  return results;
}
