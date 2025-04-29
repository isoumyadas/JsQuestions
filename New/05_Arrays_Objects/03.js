// How to deep clone an object? What are the limitations of JSON.stringify()?

// Using structuredClone()
const clone = structuredClone(originalObj);
// ✅ Deeply clones objects, arrays, nested structures.
// ❌ Fails on functions, DOM nodes, or unsupported types.

// ==========================================================

// Using Json.stringify() + Json.parse()
const clone1 = JSON.parse(JSON.stringify(originalObj));
// ✅ Works for most simple objects

// ============================================================

// Using lodash
/**
import cloneDeep from 'lodash/cloneDeep';
const clone = cloneDeep(originalObj);
*/

// && Limitations
// |-------------------------------|------------------------------------|------------------------|
// | Limitation                     | Example                            | Behavior               |
// |-------------------------------|------------------------------------|------------------------|
// | ❌ Functions lost              | `{ sayHi: () => "hi" }`           | Function is removed    |
// | ❌ `undefined` lost            | `{ a: undefined }`                | Key is removed         |
// | ❌ `Symbol` values lost        | `{ a: Symbol("id") }`             | Symbol is removed      |
// | ❌ Date becomes string         | `{ date: new Date() }`            | Converts to string     |
// | ❌ Circular references crash   | `obj.self = obj`                  | Throws error           |
// | ❌ RegExp, Map, Set not handled| `{ regex: /abc/ }`                | Converts to `{}`       |
// |-------------------------------|------------------------------------|------------------------|

// Use structuredClone() if available (modern browsers).
// Use lodash.cloneDeep() for full reliability in production.
