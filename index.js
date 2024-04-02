// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, (element, index, array) => {
      newArray.push(callback(element, index, array));
    });
    return newArray;
  }
  
  // myReduce function
  function myReduce(collection, callback, acc) {
    let startingIndex = 0;
    if (!acc) {
      acc = collection[0];
      startingIndex = 1;
    }
    myEach(collection.slice(startingIndex), (element, index, array) => {
      acc = callback(acc, element, array);
    });
    return acc;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (element, index, array) => {
      if (predicate(element, index, array)) {
        result = element;
        return false; // exit the loop once the first acceptable element is found
      }
    });
    return result;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    const newArray = [];
    myEach(collection, (element, index, array) => {
      if (predicate(element, index, array)) {
        newArray.push(element);
      }
    });
    return newArray;
  }
  
  // mySize function
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst function
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast function
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast
  };
  