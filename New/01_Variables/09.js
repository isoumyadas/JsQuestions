// Write a function that checks if a value is a number without using typeof.

function checkValueIsNumber(num1) {
  if (isNaN(num1)) {
    console.log(`${num1} is not a number`);
    return;
  }

  return console.log(`${num1} is a number.`);
}

checkValueIsNumber(9);
checkValueIsNumber("8"); // (string gets coerced to number)
checkValueIsNumber("abc");
checkValueIsNumber(null);

// function checkValueIsNumber(val) {
//   return console.log(!isNaN(val) || isFinite(val));
// }

// checkValueIsNumber(9);
// checkValueIsNumber("8");
// checkValueIsNumber("abc");
