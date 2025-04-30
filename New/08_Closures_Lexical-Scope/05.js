// implement once-only function

function once(fn) {
  let isBeenCalled = false;

  return function () {
    if (!isBeenCalled) {
      isBeenCalled = true;
      return fn(); // You can use .apply here.(For this)
    } else {
      console.log("You can only call this once.");
    }
  };
}

const sayOnce = once(() => console.log("Logged In Successfully"));
sayOnce();
sayOnce();
