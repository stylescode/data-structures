var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var storage = {};
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    var key = Object.keys(this).length - Object.keys(stackMethods).length;
    this[key] = value;

  },

  pop: function() {
    var instanceKey = Object.keys(this).length - Object.keys(stackMethods).length;
    var result = this[instanceKey - 1];
    delete (this[instanceKey - 1]);
    return result;

  },

  size: function() {
    return Object.keys(this).length - Object.keys(stackMethods).length;

  }


};

