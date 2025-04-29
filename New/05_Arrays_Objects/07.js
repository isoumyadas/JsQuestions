// Sort an array of objects based on a nested property value.

const people = [
  { id: 1, user: { name: "Soumya", age: 25 } },
  { id: 2, user: { name: "John", age: 20 } },
  { id: 3, user: { name: "Alice", age: 30 } },
];

// Sorting in ascending
let asc = people.sort((a, b) => a.user.age - b.user.age);
console.log(asc);

// Sorting in descending
let des = people.sort((a, b) => b.user.age - a.user.age);
console.log(des);

// a and b are two elements from the array being compared at a time.
