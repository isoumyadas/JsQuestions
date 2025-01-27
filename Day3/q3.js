// Q : Implement a function to check if two objects are equal.

// 1st method => Applying the below function would fail in case of nested objects

const obj1 = {
  name: "sammyu",
  age: 22,
};

const obj2 = {
  name: "sammyu",
  age: 22,
};

function haveSameData(obj1, obj2) {
  // get keys to check if both objects have same keys and have match their length
  const obj1length = Object.keys(obj1).length;
  const obj2length = Object.keys(obj2).length;

  if (obj1length === obj2length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }

  return false;
}

console.log(haveSameData(obj1, obj2));

// 2nd method is good for nested objects. | It doesn't handle special cases like Date objects, Map, Set, or objects with methods.
// full working : https://www.notion.so/Javascript-Projects-1878a069a2a4808ba9a5cf059504da5f?pvs=4#1888a069a2a4806bb697c5a0e486582c

const object1 = { a: { x: 10 }, b: 20 };
const object2 = { a: { x: 15 }, b: 20 };

function areObjectsEqual(object1, object2) {
  const areValuesObjects = (val) => typeof val === "object" && val !== null;

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (areValuesObjects(val1) && areValuesObjects(val2)) {
      // Check nested objects recursively
      if (!areObjectsEqual(val1, val2)) {
        return false; // If nested objects are not equal, return false
      }
    } else if (val1 !== val2) {
      return false; // Check primitive values
    }
  }

  return true; // All keys and values are equal
}

console.log(areObjectsEqual(object1, object2)); // Output: false

// 3rd method

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Example Usage
const obj11 = {
  name: "John",
  age: 25,
  details: { hobbies: ["reading", "gaming"], location: "New York" },
};
const obj22 = {
  name: "John",
  age: 25,
  details: { hobbies: ["reading", "gaming"], location: "New York" },
};

console.log(areObjectsEqual(obj11, obj22));

// you can also use lodash  _.isEqual(obj1,obj2)
