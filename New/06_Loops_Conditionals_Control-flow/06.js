// Write a loop that reverses a string without using .reverse().
const ogString = "Soumya";
let reverseString = "";
for (let i = ogString.length - 1; i >= 0; i--) {
  reverseString += ogString[i];
}
console.log(reverseString);

// ======================================================================================================

// Using in function
function reverseStringFormat(str) {
  if (typeof str !== "string") return "Value should be only string";
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

console.log(reverseStringFormat("Zandran"));
console.log(reverseStringFormat(12233));
console.log(reverseStringFormat("12233"));
console.log(reverseStringFormat(true));
