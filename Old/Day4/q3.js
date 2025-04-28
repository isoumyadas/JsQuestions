// Q : Explain callback functions with an example

// A callback function is passed as an argument to another function to be executed later;
// Useful for handling tasks in a sequence, especially in asynchronous operations

function firstFunc(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function callbackFunc() {
  console.log(`Thanks for visting us`);
}

firstFunc("soumya", callbackFunc);

// Real world example
// Simulating an asynchronous operation with a callback
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched successfully!");
    callback(); // Execute the callback after data is fetched
  }, 2000); // Simulates a 2-second delay
}

// Callback function to process data
function processFetchedData() {
  console.log("Processing the fetched data...");
}

// Using the function with a callback
fetchData(processFetchedData);
