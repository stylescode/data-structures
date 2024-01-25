var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = Object.keys(someInstance).length - 3;
    someInstance[key] = value;

  };

  someInstance.pop = function() {
    var storageKey = Object.keys(storage).length;
    var instanceKey = Object.keys(someInstance).length - 3;
    storage[storageKey] = someInstance[instanceKey - 1];
    delete someInstance[instanceKey - 1];
    return storage[storageKey];

  };

  someInstance.size = function() {
    return Object.keys(someInstance).length - 3;

  };

  return someInstance;
};
