// Explain short-circuiting with && and || operators.

// Short-circuiting means JavaScript stops evaluating as soon as the result is known.

//  && (AND):
// Returns the first falsy value or the last value if all are truthy.

console.log(true && "hello"); // "hello"
console.log(0 && "hello"); // 0 (stops at falsy)

//  || (OR):
// Returns the first truthy value or the last value if all are falsy.

console.log(false || "hi"); // "hi"
console.log("" || 0); // 0 (both falsy, returns last)

/**
 Default values:    
    let name = userName || "Guest";

 Conditional execution:
    isLoggedIn && showDashboard();
 */
