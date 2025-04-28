// Q: Create an object and access its properties in multiple ways.

// 1st : Dot notation => It is suitable for accessing properties with vaild identifiers(no spaces, special char or starting with number).
const person = {
  name: "Jogn",
  age: 25,
};

console.log(person.age);
console.log(person.name);

// 2nd : Bracket Notation (object["property"]) => Allows access to properties with dynamic keys or special characters in their names. | Property names can be strings, variables, or expressions.
const person1 = { name: "John", "home address": "123 Street", age: 25 }; // In this case special characters will be "home address" | access the property with "";

console.log(person1["name"]);
console.log(person1["home address"]);
//variable
const prop = "age";
console.log(person1[prop]); // for var dont use ""

// 3rd : Object Destructuring => Extracts multiple properties from an object into variables. | Cleaner and more concise for accessing multiple properties.
const person3 = { name: "James", city: "Boisar" };
const { name, city } = person3;
console.log(name);
console.log(city);

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

//7th : For In => Iterates over all enumerable properties of an object
const person5 = { name: "John", age: 25 };
for (const key in person5) {
  console.log(`${key}: ${person[key]}`);
}

//8th : Optional Chaining(?.) => Safely access deeply nested properties without checking if intermediate properties exist. | Returns undefined if any intermediate property is null or undefined.
const person6 = { name: "John", address: { city: "New York" } };
console.log(person6?.address?.city); // Output: "New York"
console.log(person6?.contact?.phone); // Output: undefined

//9th: Using Dynamic Properties ([]) in Object Literal => Properties can be computed dynamically during object creation | Using a variable as a key in a JavaScript object literal enables dynamic property creation, allowing us to define object properties based on variable values.

const key = "name";
const person7 = { [key]: "John", age: 25 };
console.log(person7.name); // Output: "John"

// 10th: Using Object.getOwnPropertyDescriptor() | Retrieves the descriptor object of a specific property.
console.log(Object.getOwnPropertyDescriptor(person7, "name"));

//11th: Reflect.get() => Part of the Reflect API for interacting with object properties.
console.log(Reflect.get(person7, "name")); // Output: "John"
