// Q: Write a function that returns the sum of two numbers.

function sumofTwoNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Both inputs should be in Numbers";
  }
}

console.log(sumofTwoNumbers(3, "soumya"));
console.log(sumofTwoNumbers(3, 8));
