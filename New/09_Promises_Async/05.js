// Write a function using async/await to:
// Fetch user data after 2 seconds.
// Then fetch posts of the user after another 2 seconds.
// Handle errors if any.

function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(url));
    }, 4000);
  });
}

function fetchUsersPosts() {
  const url = "https://dummyjson.com/posts/1";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(url));
    }, 5000);
  });
}

const fetchingUserWithAsync = async () => {
  try {
    const users = await fetchUsers();
    const usersRes = await users.json();

    const userPost = await fetchUsersPosts();
    const usersPosts = await userPost.json();

    return { usersRes, usersPosts }; // this will return a promise
  } catch (error) {
    console.error(error);
  }
};

// fetchingUserWithAsync().then((data) => {
//   console.log(data); // use returned data here
// });

// You can also do in this way:>
// async function getUltimateData() {
//   const finalResult = await fetchingUserWithAsync();
//   console.log(finalResult);
// }

// getUltimateData();
