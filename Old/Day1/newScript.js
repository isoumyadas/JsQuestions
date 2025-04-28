// Q1

// ^ what does hoisting mean? in js
// ^ Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This allows you to use variables and functions before they are declared in the code.

//  var is function-scoped, while let and const are block-scopeds
//  The main difference between var and let, const is. Var is hoisted but not declared
console.log(a); // this will show undefined
var a = "sop";
console.log(a);

// But same you do for let or const
// console.log(uname); // you will encounter => ReferenceError: Cannot access 'uname' before initialization as this is in TDZ
const uname = "sammuy";
console.log(uname);

console.log("=============== Q2 ===========================");

// Q2
function checkDataType(data) {
  return typeof data;
}

console.log(checkDataType("Messi"));
console.log(checkDataType(89));
console.log(checkDataType(true));
console.log(checkDataType({ name: "soumya", age: 23 }));

console.log("=============== Q3 ===========================");

//Q3

(let = a = 5), (b = 15);

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a} | b = ${b}`);

console.log("=============== Q4 ===========================");

// Q4
function calculator(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Both inputs must be numbers");
  }
  return {
    add() {
      return num1 + num2;
    },

    sub() {
      return num1 - num2;
    },

    multiply() {
      return num1 * num2;
    },

    divide() {
      return num1 / num2;
    },
  };
}

const result = calculator(2, 5);

console.log(result.divide());
console.log(result.sub());
console.log(result.add());
console.log(result.multiply());

console.log("=============== Q5 ===========================");

// Q5

function countLength(str) {
  if (str) {
    str = str.toLowerCase();
  }

  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

console.log(countLength("Soumya Ranjan Das"));

console.log("=============== Q6 ===========================");

// Q6

// ^ undefined means a variable has been declared but has not yet been assigned a value,
// ^ whereas null is an assignment value, meaning that a variable has been declared and given the value of null.

let x;
console.log(x); // logs 'undefined'

let y = null;
console.log(y); // logs 'null'

console.log("=============== Q7 ===========================");

// Q7

function convertToNumber(str) {
  if (typeof str !== "string") {
    throw new Error(`The input must be in String`);
  }

  console.log(typeof str);

  const result = Number(str);

  if (isNaN(result)) {
    throw new Error(`Invalid Input: ${str} cannot be converted into Number`);
  }

  console.log(typeof result);

  return result;
}

console.log(convertToNumber("89"));

console.log("=============== Q8 ===========================");

// Q8

function sortingNum(arr) {
  const lowestNum = Math.min(...arr);
  const highestNum = Math.max(...arr);

  return { lowestNum, highestNum };
}
const resut = [12, 3, 4, 56, 8];
console.log(sortingNum(resut));

console.log("=============== Q10 ===========================");

//Q10

function formatIntoDecimal(num) {
  return num.toFixed(2);
}

console.log(formatIntoDecimal(67));
