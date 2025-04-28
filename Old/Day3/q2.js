// Q : Write a function to merge two objects.

// 1st method

function mergeObjectUsingSpreadOper(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "soumya" };
const obj2 = { age: 34, city: "mumbai", isAvailable: false };

console.log("Using Spread opearator: ", mergeObjectUsingSpreadOper(obj1, obj2));

// 2nd method
//Object.assign() =>  Object.assign() method, which copies properties from one or more source objects into a target object, effectively combining them
function mergeObjectUsingObjectAssign(obj1, obj2) {
  return Object.assign({}, obj1, obj2); // here target value is {} and source are obj1 and obj2
}
const person = { name: "messi" };
const city = { location: "Argentina" };
console.log(mergeObjectUsingObjectAssign(person, city));
