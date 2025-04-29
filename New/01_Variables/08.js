// Explain implicit vs explicit type coercion with examples.

// Coercion in JavaScript means converting a value from one data type to another, like:
// String → Number
// Number → Boolean
// Boolean → String, etc.

//Example:
"5" + 1; // "51" → number 1 is coerced to string
"5" - 1; // 4   → string "5" is coerced to number

/**
 Two types of coercion:
    Implicit → JS does it automatically
    Explicit → You do it manually using functions like Number(), String(), Boolean()
 */

// Implicit
console.log("5" + 2); // "52" → number 2 is coerced to string
console.log("5" - 2); // 3   → string "5" is coerced to number
console.log(1 == "1"); // true → string is coerced to number

// Explicit
console.log(Number("5") + 2); // 7 → string "5" explicitly converted to number
console.log(String(10) + "0"); // "100" → number 10 converted to string
console.log(Boolean("hello")); // true → non-empty string is truthy
