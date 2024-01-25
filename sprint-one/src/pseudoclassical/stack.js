var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var key = Object.keys(this).length - 1;
  this[key] = value;

};

Stack.prototype.pop = function() {
  var targetKey = Object.keys(this).length - 2;
  result = this[targetKey];
  delete this[targetKey];
  return result;

};

Stack.prototype.size = function() {
  return Object.keys(this).length - 1;

};


