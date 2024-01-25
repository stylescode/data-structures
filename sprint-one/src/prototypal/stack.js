var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    var key = Object.keys(this).length;
    this[key] = value;

  },

  pop: function() {
    var targetKey = Object.keys(this).length - 1;
    var result = this[targetKey];
    delete this[targetKey];
    return result;

  },

  size: function() {
    return Object.keys(this).length;

  }


};


