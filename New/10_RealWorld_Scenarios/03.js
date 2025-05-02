// Write a polyfill for Array.prototype.map

// What does polyfill mean?
// Create your own custom implementation of the Array.prototype.map method — i.e., "polyfill" it, which means writing code that     mimics the behavior of the built-in map() function for older environments where it's not supported.

Array.prototype.customMyMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// this refers to the array you're calling .myMap() on.
// You're looping through every element in that array using a for loop.

// On each iteration:
// this[i] is the current element.
// i is the current index.
// this is the entire array.

// You call the callback (just like native .map() does) with all three arguments:
// callback(currentValue, index, fullArray)

// The result of the callback is pushed into the result array, which you're building to return.

const nums = [1, 2, 3, 4];

const doubled = nums.customMyMap((num) => num * 2);
console.log(doubled);
