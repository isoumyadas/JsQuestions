// Implement a function that limits another function to run once every 2 seconds (throttle).

// Throttling means limiting a function to run at most once in a specified time interval, no matter how many times it's called.
// Useful for controlling high-frequency events like scroll, resize, or button clicks.

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now(); // Gets the current time in milliseconds.
    if (now - lastCall >= delay) {
      // If enough time (e.g. 2s) has passed since the last allowed call, proceed.
      lastCall = now; // Update lastCall to the current time.
      fn.apply(this, args); // Call the original function fn, passing the current this and any arguments it was called with.
    }
  };
}

// Example usage
function logMessage() {
  console.log("Function called at", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000);

// Simulate frequent calls
setInterval(throttledLog, 500); // Will log every 2 seconds, not 0.5
// Because throttle checks if 2 seconds (2000ms) have passed since the last allowed call.
// Even if it's triggered every 500ms, it only lets the function run when the time gap is ≥ 2000ms, blocking the rest.
