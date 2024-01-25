class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var key = Object.keys(this).length - 1;
    this[key] = value;
  }

  dequeue() {
    var result = this[0];
    delete this[0];
    for (var key in this) {
      if (key > 0) {
        this[key - 1] = this[key];
      }
    }
    delete this[Object.keys(this).length - 2];
    return result;
  }

  size() {
    return Object.keys(this).length - 1;
  }

}
