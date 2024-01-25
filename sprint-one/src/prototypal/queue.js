var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    // use this
    var key = Object.keys(this).length;
    this[key] = value;

  },

  dequeue: function() {
    var result = this[0];
    delete this[0];
    for (var key in this) {
      if (key > 0) {
        this[key - 1] = this[key];
      }
    }
    delete this[Object.keys(this).length - 1];
    return result;

  },

  size: function() {
    return (Object.keys(this).length);

  },
};


