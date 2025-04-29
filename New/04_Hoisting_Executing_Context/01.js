// What is hoisting? What gets hoisted and how?
// && => Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

// | Type               | Hoisted?         | Value Hoisted?  |
// |--------------------|------------------|------------------|
// | `var`              | ✅ Yes           | ❌ Only declaration (`undefined`) |
// | `let`, `const`     | ✅ Yes (temporal dead zone) | ❌ Not initialized |
// | Functions (declared) | ✅ Fully        | ✅ Yes (can be called before) |
// | Function expressions | ❌ No           | ❌ Not hoisted |
