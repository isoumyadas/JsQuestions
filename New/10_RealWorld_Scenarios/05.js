// Find duplicates in an array of objects based on a unique key.
// Set() in JavaScript is used to store unique values — it automatically removes duplicates.
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 3, name: "D" },
  { id: 2, name: "E" },
];

function findDuplicates(arr, key) {
  const seen = new Set();
  const duplicates = [];

  for (const item of arr) {
    if (seen.has(item[key])) {
      duplicates.push(item);
    } else {
      seen.add(item[key]);
    }
  }

  return duplicates;
}

console.log(findDuplicates(users, "id"));
