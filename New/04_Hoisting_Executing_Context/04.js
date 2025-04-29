// What will happen?

function test() {
  console.log(a);
  var a = 20;
}
test();

// Before running the code, JavaScript hoists declarations.
// Inside test(), the line var a = 20; is hoisted as:> var a;

// Execution Order:
// var a; → Hoisted, a is undefined
// console.log(a); → Logs undefined (since a is declared but not yet assigned)
// a = 20; → Now a is assigned the value 20

// Output will be undefined
