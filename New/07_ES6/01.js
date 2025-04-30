// What are arrow functions? Show usage differences in this.
// It is just syntaic sugar to write a function which is shorter syntax.

// | Feature         | Traditional Function      | Arrow Function |
// |--------|----------------------|----------------|
// | `this` binding | Has its own `this` | Inherits `this` from parent |
// | Can be used as constructor? | ✅ Yes | ❌ No |
// | Shorter syntax | ❌ No | ✅ Yes |
// | `arguments` object | ✅ Available | ❌ Not available |

const obj = {
  name: "Soumya",
  traditional: function () {
    console.log("Traditional:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

obj.traditional(); // ✅ Soumya (this refers to obj)
obj.arrow(); // ❌ undefined (this refers to global/window)

/**
 * function creates its own this context
 * => uses this from where it was defined (lexical scoping)
 */
