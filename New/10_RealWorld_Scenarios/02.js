// Debounce an input field so API is not hit on every keypress.

// Debounced Function

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => func(...args), delay);
  };
}

const user = {
  name: "",
  updateName: function (newName) {
    this.name = newName;
    console.log("Updated Name:", this.name);
  },
};

const debouncedFunction = debounce(user.updateName, 2000);

debouncedFunction("Soumya");
// debouncedFunction("John");
