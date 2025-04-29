// Explain the difference between function declaration and expression.

// Function Declaration
// Starts with function keyword.
// Name is Optional (can be anonymous)
// Hoisted (can be called before it's defined).

greet(); // ✅ works

function greet() {
  console.log("Hello");
}

// ===============================================================================

// Function Expression
// Assigned to a variable.
// Not hoisted (must be defined before use).

greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log("Hi");
};

// Arrow function
const greet = () => {
  console.log("Hey");
};

greet(); // ✅ works if called after definition

// Feature	          Function Declaration	  Function Expression	                       Arrow Function
// Syntax	          function name() {}	      const fn = function(){}	               const fn = () => {}
// Hoisted	          ✅ Yes	                    ❌ No	                                ❌ No
// this binding 	  Own this	                 Own this	                              ❌ Inherits from parent
// Use in classes	  ✅ Yes	                   ✅ Yes	                               ⚠️ Not as method (no this)
// Can be anonymous	  ❌ No	                   ✅ Yes	                               ✅ Yes
