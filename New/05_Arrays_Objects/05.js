// Remove duplicate values from an array.

// using Set() method: creates an object containing only unique values. To remove the duplicate elements we can use the set and then convert the object back to array to get the only unique values.

let a = [3, 4, 5, 6, 4, 2, 3, 4, 5, 6, 8, 9];

let setting = new Set(a);

let uniqueValues = [...setting];
console.log(uniqueValues);

// using filter() method: creates a new array of elements that matches the passed condition through the callback function. It will include only those elements for which true is returned.

const filteredUniqueValues = a.filter(
  (item, index) => a.indexOf(item) === index
);
console.log(filteredUniqueValues);
