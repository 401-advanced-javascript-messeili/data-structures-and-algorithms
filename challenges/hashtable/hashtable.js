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

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this.head;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    const index = this.hash(key);
    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[index] = ll;
    } else {
      this.storage[index].prepend({ [key]: value });
    }
  }
  addWithoutKey(index, value) {
    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend(value);
      this.storage[index] = ll;
    } else {
      this.storage[index].prepend(value);
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.storage[index]) {
      return 'Key is not found';
    }
    let result = this.storage[index].head;
    while (result) {
      if (result.value[key]) {
        return result.value[key];
      } else {
        result = result.next;
      }
    }
  }

  contains(key) {
    const index = this.hash(key);
    if (!this.storage[index]) {
      return false;
    }
    let result = this.storage[index].head;
    while (result) {
      if (result.value[key]) {
        return true;
      } else {
        result = result.next;
      }
    }
  }
}

// const hashmap = new HashMap(4000);
// hashmap.add('name', 'mahmoud');
// hashmap.add('one', 'thing');
// hashmap.add('eno', '1');
// hashmap.add('neo', '2');
// hashmap.add('12345', '1');
// hashmap.add('13245', '2');
// hashmap.add('12435', '3');
// hashmap.add('12354', '4');
// hashmap.add('52341', '5');
// hashmap.add('15342', '6');
// console.log(hashmap.get('12345'));
// console.log(hashmap.contains('124g35'));

module.exports = { HashMap, LinkedList };
