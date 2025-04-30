// What’s the difference between for...in and for...of?

/**
for...in
    Used to loop over object keys (enumerable properties).
    Works on objects and arrays (but gives keys, not values).
 */

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3, 4];

for (let key in obj) {
  console.log(key); // a, b
  console.log(obj[key]); // 1, 2
}

/**
for...of
    Used to loop over values of iterables (like arrays, strings, maps, sets).
    Does not work directly on plain objects.
*/

const arr1 = [10, 20, 30];
for (let value of arr1) {
  console.log(value); // 10, 20, 30
}
