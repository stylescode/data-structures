var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = Object.keys(someInstance).length - 3;
    someInstance[key] = value;

  };

  someInstance.dequeue = function() {
    var result = someInstance[0];
    delete someInstance[0];

    for (var key in someInstance) {
      if (key > 0) {
        someInstance[key - 1] = someInstance[key];
      }
    }

    delete someInstance[Object.keys(someInstance).length - 4];

    return result;

  };

  someInstance.size = function() {
    return Object.keys(someInstance).length - 3;

  };

  return someInstance;

};
