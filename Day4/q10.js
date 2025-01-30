// Q : Explain async/await and write a function to fetch data from an API.

// async/await is a syntax in JavaScript that allows you to work with asynchronous code in a more synchronous way, making it easier to read and maintain. It is built on top of Promises and is used to handle asynchronous operations such as fetching data from an API.

// async: It is used to declare a function as asynchronous. It automatically returns a Promise, even if you don't explicitly return one.
// await: It can only be used inside an async function. It pauses the execution of the code inside the function until the Promise is resolved or rejected. It simplifies working with Promises.

async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!data.ok) {
      throw new Error("Network response is not ok!");
    }

    const result = await data.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

const data = await fetchData(); // here you have to use await as fetchData returns the result, as pending <promise>
//The issue you're encountering is that fetchData() is an asynchronous function, and when you call it, it returns a Promise. Even though the function may have completed its task, the console.log(fetchData()) will log a Promise object (in a "pending" state) because the function's execution is asynchronous and hasn't resolved when you log the result.

// Why it happens:
// When you call fetchData(), it initiates an asynchronous fetch operation and returns a Promise.
// The console.log(fetchData()) runs immediately after calling fetchData(), but the Promise is still "pending" and hasn't been resolved by the time console.log() executes.
console.log(data);

// you can also use these method:
//1. await inside another  function
// async function logData() {
//   const data = await fetchData();
//   console.log(data);  // This will log the resolved data
// }

// logData();  // Call the async function

//2. Use .then() to handle the resolved value
// fetchData()
//   .then((data) => {
//     console.log(data); // This will log the resolved data
//   })
//   .catch((error) => {
//     console.error(error); // Handle any errors if the Promise is rejected
//   });
