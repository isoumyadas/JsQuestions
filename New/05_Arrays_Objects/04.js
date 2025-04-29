// Write a function that flattens a nested array: [1, [2, [3, 4]]] → [1, 2, 3, 4]

const nestedArray = [1, [2, [3, 4]]];

const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray);
