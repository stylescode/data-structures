class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var key = Object.keys(this).length - 1;
    this[key] = value;

  }

  pop() {
    var target = Object.keys(this).length - 2;
    var result = this[target];
    delete this[target];
    return result;

  }

  size() {
    return Object.keys(this).length - 1;

  }

}