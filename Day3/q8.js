// Q: Demonstrate the difference between Object.keys, Object.values, and Object.entries.

// 4th : Object.keys() => Retrieves an array of the object's own enumerable property keys. | You can interate through these keys to access values
console.log(Object.keys(person3));
Object.keys(person3).forEach((key) => {
  console.log(`${key} : ${person3[key]}`);
});

//5th : Object.values() => Retrieves an array of the object’s property values.
const person4 = { name: "John", age: 25 };
console.log(Object.values(person4)); // Output: ["John", 25]

//6th : Object.entries() => Returns an array of [key, value] pairs. | Useful for iterating over both keys and values simultaneously.
console.log(Object.entries(person3));

Object.entries(person3).forEach(([key, value]) =>
  console.log(`${key} : ${value}`)
);
