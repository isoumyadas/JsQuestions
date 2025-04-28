// Q : Implement a debounce function

// Debouncing is a programming technique used to limit the rate at which a function executes. It ensures that the function runs only after a specified delay, preventing unnecessary executions when triggered multiple times in quick succession.

function debounce(func, delay) {
  // here closure is used
  let timer; // this holds the settimeout/timer id

  return function (...args) {
    // here args hold the value of debouncedFunc in an array
    clearTimeout(timer); // to clear any pervious timer id
    // timer = setTimeout(() => func.apply(this, args), delay); // sets a new timeout // Since printTheValue doesn't rely on an object context, this has no effect in your example.
    // You can use instead
    timer = setTimeout(() => func(...args), delay);
  };
}

function printTheValue(letter) {
  console.log(`Fetching Data for : ${letter}`);
}

const debouncedFunc = debounce(printTheValue, 1000);
debouncedFunc("s");
debouncedFunc("T"); // Only this will logged after 1000.

// So when do we use this ? => use this with apply, when it relies on object context, if the original function relies on an object context use func.apply(this, args).
// because this will refer to object context (like  person = {name: "soumya"}). So here this will refer to person object.

// But if we dont use normal func while returning then we don't need this too.

// For object context and arrow function (things looks like this);

function debounce(func, delay) {
  let timer;
  return (...args) => {
    console.log(...args);
    const context = this; // Step 1: Preserve 'this' // we dont need this
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args); // Step 2: Restore 'this' when calling func
    }, delay);
  };
}

const user = {
  name: "",
  updateName: function (newName) {
    this.name = newName;
    console.log("Updated Name:", this.name);
  },
};

// Create a debounced version of updateName
const debouncedUpdate = debounce(user.updateName, 2000);

// Call debounced function
debouncedUpdate("Soumya");

// But when we do same for normal return funtion, then we need to use call for debounceUpdate(user, soumya) and pass apply method too. func.apply(this, ...args)
