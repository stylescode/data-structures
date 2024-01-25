var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};


};



Queue.prototype.enqueue = function(value) {
  var key = Object.keys(this).length - 1;
  this[key] = value;

};

Queue.prototype.dequeue = function() {
  var result = this[0];
  delete this[0];
  for (var key in this) {
    if (key > 0) {
      this[key - 1] = this[key];
    }
  }
  delete this[Object.keys(this).length - 2];
  return result;

};

Queue.prototype.size = function() {
  return Object.keys(this).length - 1;

};
