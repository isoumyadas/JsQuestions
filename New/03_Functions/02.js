// Can we call a function before its declaration? Why/Why not?

// ✅ Yes, but only for function declarations — because they are hoisted.

// ❌ No for function expressions and arrow functions — they are not hoisted. Calling them before definition causes an error.
