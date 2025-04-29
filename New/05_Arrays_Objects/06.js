// Write a function that compares two objects deeply.

// 1. Comparing Objects Using JSON.stringify()
// => One simple way to compare objects is by converting them to JSON strings using JSON.stringify() and then comparing the resulting strings

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(compareObjects(obj1, obj2)); // true

// ===========================================================================================================================

// 2. Comparing Objects Using a Custom Function

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual(obj1, obj2)); // true

// ===========================================================================================================================

// 3. Comparing Objects Using Lodash

const _ = require("lodash");

console.log(_.isEqual(obj1, obj2)); // true
