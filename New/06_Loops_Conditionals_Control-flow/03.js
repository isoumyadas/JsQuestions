// Write a program to sum all elements in an array.

const sumArr = [1, 2, 3, 6, 7, 8];

// forOf
let k = 0;
for (const arr of sumArr) {
  k += arr;
}
console.log("ForOf:: ", k); // When we log inside the scope it will give us one by one sum, logging it outside will give total sum of.

// ForEach
let perv = 0;
sumArr.forEach((num) => (perv += num));
console.log("ForEach:: ", perv);
