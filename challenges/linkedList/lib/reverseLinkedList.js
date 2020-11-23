'use strict';
const ll = require('./linkedlist');
console.log('1', ll);
let tempLl = JSON.stringify(ll);
function reverse(ll) {
  let previous = null;
  while (ll.head !== null) {
    let nextNode = ll.head.next;
    ll.head.next = previous;
    previous = ll.head;
    ll.head = nextNode;
  }
  tempLl = JSON.parse(tempLl);
  console.log('t', tempLl.head);
  ll.head = previous;
  console.log('p', ll);
  if (previous == tempLl) {
    return true;
  } else {
    return false;
  }
}

console.log(reverse(ll));
console.log('3', tempLl);
