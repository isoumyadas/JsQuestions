// Q : Create a program to count occurrences of words in a sentence and store them in an object

function countOccur(user) {
  // Check if given param is empty or not
  if (user.length === 0) return "The input is empty";

  const result = {};

  // split is used to takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
  const words = user.split(" "); // giving space will seprate the words

  // Loop the user param to check each value occurence
  for (const char of words) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

const user = "soumya ranjan das soumya";
console.log(countOccur(user));
