// Q : Write a function to clone an object deeply.

// Shallow Cloning => clones the object or array (using ... and Object.assign), but it fails to copy the nested objects

// Deep cloning => Deep cloning means creating a new object that replicates the original object and its nested objects/arrays, ensuring no references to the original. => where most probably u use recursion or JSON.stringfy

// 1st method : recursion method

function deepCopyObj(obj) {
  // First we will check if the object is null or not
  if (obj === null) return null;

  // then we will create a shallow copy of original
  const clone = Object.assign({}, obj);

  // here we will iterate and save the value from og array and if nested recursion will be called
  Object.keys(clone).forEach((key) => {
    clone[key] =
      typeof obj[key] === "object" ? deepCopyObj(obj[key]) : obj[key]; // here it checks if the obj[key] is object then start recursive call else assign the obj[key] value to clone[key].
  });

  // If current param is array
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }

  return clone;
}

const obj1 = {
  name: "soumya",
  add: {
    city: "Boisar",
    state: "Maharashtra",
    street: { name: "street1", locatio: "SY Road" },
  },
  age: 22,
};
console.log(deepCopyObj(obj1));

// 2nd method
// Apparently, cloning is a fairly common and important problem. So much so that JavaScript introduced the structuredClone() global function, which can be used to deep clone objects. Instead of implementing a complicated recursive function, we can simply use this function to clone the object.

const b = structuredClone(obj1);
console.log("StructuredClone: ", b);
