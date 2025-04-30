// Implement a function that searches for a value in a deeply nested object using recursion.

const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};

function deepSearch(obj, target) {
  for (const key in obj) {
    const value = obj[key];
    console.log("inner", value);

    if (value === target) return true;

    if (typeof value === "object" && value !== null) {
      if (deepSearch(value, target)) return true;
    }
  }

  return false;
}

console.log(deepSearch(nestedObj, 4)); // true
console.log(deepSearch(nestedObj, 99)); // false
