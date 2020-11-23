'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      return this;
    }
  }

  toString() {
    let str = '';
    if (!this.head) {
      str = 'NULL';
      return str;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        str += `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next;
      }
    }
    str += '{NULL}';
    console.log(str);
    return str;
  }

  insertBefore(value, curVal) {
    const node = new Node(value);
    if (!this.head) {
      return 'linked list is empty';
    } else if (this.head.value === curVal) {
      node.next = this.head;
      this.head = node;
      return this;
    } else {
      let cond;
      let currentNode = this.head.next;
      let temp = this.head;
      while (currentNode) {
        if (currentNode.value === curVal) {
          node.next = currentNode;
          temp.next = node;
          cond = true;
        } else {
          cond = false;
        }
        currentNode = currentNode.next;
        temp = temp.next;
      }

      if (!cond) {
        console.log('Out');
        return 'Out of range';
      }
      return this;
    }
  }

  insertAfter(value, curVal) {
    const node = new Node(value);
    let temp;
    if (!this.head) {
      return 'empty';
    } else if (this.head.value == curVal) {
      temp = this.head.next;
      this.head.next = node;
      node.next = temp;
    } else {
      let currentNode = this.head.next;

      while (currentNode) {
        if (currentNode.value == curVal) {
          temp = currentNode.next;
          currentNode.next = node;
          node.next = temp;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
}

const ll = new LinkedList();
// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.insert(4);
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(2);
ll.append(1);
// ll.insertAfter(10, 3);
// ll.toString();

module.exports = ll;
