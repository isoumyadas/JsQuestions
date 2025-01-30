// Q: Write a function to memoize the result of a computation

// For understanding => https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#1688a069a2a480dc805ce1b9547d56a9

function memoize(func) {
  const cache = {};

  return function (...args) {
    // check if it is present in cache or not
    const change = JSON.stringify(args); // you need to use JSON.stringify here, as this takes ...args \ when it takes only one param then you dont need to use it, insted  you can use for in loop.
    console.log(change);
    if (cache[change]) {
      console.log(`Fethcing data : ${cache[change]}`);
      return cache[change];
    }

    console.log(`Computing data: ${change}`);
    // we have perform computation else it will return undefined
    const result = func(...args);
    cache[change] = result;
    console.log("Cahche", cache);
    return result;
  };
}

const fin = memoize((...args) => args.join(" "));
console.log(fin("soumya"));
console.log(fin("das", "soumya"));
console.log(fin("soumya"));

//When you write cache[change] = cache[change];, you're simply assigning the value of cache[change] to itself.
// This operation has no effect because you're not changing anything in the cache—you're just reassigning the same value back to the same key.
// At that point, the cache doesn't hold any meaningful data for the new arguments.
// Instead, to store the result, you need to compute it by calling func(...args) and assign the result of that computation to the cache.
// Without performing the actual function call, the cache will never store a meaningful value and will return undefined.
