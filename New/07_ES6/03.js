// Use rest and spread operators to clone and update an object.

const obj = {
  name: "sam",
  age: 23,
  profile: "Working",
};

// cloning
const clonedObj = { ...obj };
console.log("ClonedObj:: ", clonedObj);

// updating
const updated = {
  ...obj,
  age: 45,
  profile: "retired",
};

console.log(updated);

// Using rest
const { age, ...rest } = updated;
console.log("Rest::> ", rest);
