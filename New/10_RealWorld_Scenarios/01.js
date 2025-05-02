// Flatten a deeply nested array: [1, [2, [3, [4]]]] → [1, 2, 3, 4]

const arr = [1, [2, [3, [4]]]];
const flattendArr = arr.flat(Infinity);
console.log(flattendArr);
