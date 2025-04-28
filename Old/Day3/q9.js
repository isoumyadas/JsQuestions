// Q : Write a function to freeze an object and demonstrate its immutability.

function freezeObj(obj) {
  Object.freeze(obj);
  obj.age = 45;
  return obj;
}

const person = { age: 23 };
console.log(freezeObj(person));

const nestedObj = { person: { age: 23 } };
Object.freeze(nestedObj);

nestedObj.person.age = 45; // Allowed! Nested objects are not frozen.
console.log(nestedObj); // Output: { person: { age: 45 } }

// To make it fully immutable:
Object.freeze(nestedObj.person);
nestedObj.person.age = 50; // This will now fail silently or throw an error in strict mode.
