// Q : Write a program to destructure an object and rename keys.

const person = {
  age: 23,
  city: "Boisar",
  country: "India",
};

// this how we can rename the keys
const { age: userAge, city: userCity, country: userCountry } = person;

console.log("User Age: ", userAge);
console.log("User City: ", userCity);
