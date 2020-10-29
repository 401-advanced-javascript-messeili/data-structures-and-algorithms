/* eslint-disable comma-dangle */
'use strict';
const zip = require('../challenges/llZip/ll-zip.js');
const LinkedLists = require('../challenges/linkedList/lib/ll.js');

describe('zip linked lists', () => {
  it('can zip two lists together', () => {
    const ll1 = new LinkedLists();
    const ll2 = new LinkedLists();
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    expect(zip(ll1, ll2).toString()).toEqual(
      `"{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } ->  NULL"`
    );
  });
  it('can zip two lists together if the first linkedlist is null', () => {
    const ll1 = new LinkedLists();
    const ll2 = new LinkedLists();
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    expect(zip(ll1, ll2).toString()).toEqual(
      `"{ 2 } -> { 4 } -> { 6 } ->  NULL"`
    );
  });
  it('can zip two lists together if the second linkedlist is null', () => {
    const ll1 = new LinkedLists();
    const ll2 = new LinkedLists();
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    expect(zip(ll1, ll2).toString()).toEqual(
      `"{ 1 } -> { 3 } -> { 5 } ->  NULL"`
    );
  });
});
