// What is result of this?

console.log([] + {}); // [object Object]
// [] is an empty array → coerced to "" (empty string).

// {} is an object → coerced to "[object Object]" when added to a string.

// So:
// "" + "[object Object]" → "[object Object]"

// ===============================================

console.log({} + []); // 0
// The {} at the start is treated as a code block, not an object.
// so it becomes:
// {}     // an empty block (ignored)
// + []   // unary plus on an empty array → +"" → 0

// above one happens when it is not wrapped with console.log

// But when it is wrapped with console.log
// the {} is not treated as a block, because it's part of the console.log() argument.

// So, JavaScript treats {} as an object literal and [] as an array.

// Then it does:
// {} → coerced to "[object Object]"
// [] → coerced to ""
// So: "[object Object]" + "" → "[object Object]"
