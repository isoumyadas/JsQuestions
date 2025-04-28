console.log("=== Q1 ===");

const crud = [];

//add

crud.push("soumya");
crud.push("Messi");
console.log("Add: ", crud);

// Read

console.log("Read: ", crud);

// Update

if (crud.length > 1) {
  console.log("Update: ", (crud[1] = "Leo Messi"));
} else {
  console.log("There is no data to update");
}
console.log("Updated Array: ", crud);

// Delete
if (crud.length > 1) {
  const data = crud.pop();
  console.log("Delete: ", data);
} else {
  console.log("There is no data to delete");
}
console.log("Array: ", crud);

console.log("=== Q2 ===");

// ^ By default, Array.prototype.sort() converts all elements to strings and then compares them in lexicographical (dictionary-like) order.
// ^ For example:
//^  [12, 35, 10, 35, 10, 34, 1] becomes ["12", "35", "10", "35", "10", "34", "1"].
//^  Lexicographically sorted: ["1", "10", "10", "12", "34", "35", "35"].

function findSecondLargestNum(arr) {
  // Check if there is two number in an arr

  if (arr.length < 2) {
    return "There should be atleast 2 numbers in an array";
  }

  // sort arr in ascending
  arr.sort((a, b) => a - b); // ^  For numerical sorting, always use a comparator function: (a, b) => a - b.
  //^ (a, b) => a - b sorts in ascending order.
  //^  (a, b) => b - a sorts in descending order.
  //^ Without a comparator, sort() treats elements as strings, leading to incorrect results for numerical arrays.
  console.log(arr);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== arr[arr.length - 1]) {
      return "The second largest number is ", arr[i]; // here return is used to stop the loop to continue
    }
  }

  return "There is no second largest number";
}

const arr = [1, 14, 6, 78, 9];
console.log(findSecondLargestNum(arr));

// You  can do this same Problem with the below solution
const array = [10, 5, 20, 8, 15];
const sortedArray = array.slice().sort((a, b) => b - a);
console.log(sortedArray);
const secondLargest = sortedArray[1];
console.log("Second largest element:", secondLargest);

console.log("=== Q3 ===");

function reverseArr(arr) {
  const output = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }

  return output;
}
const array1 = [2, 5, 6, 7, 3, 4, 9, 0];
console.log(reverseArr(array1));

// In another way
function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements at start and end
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

const ar = [2, 5, 6, 7, 3, 4, 9];
console.log(reverseArr(ar));

console.log("=== Q4 ===");

function findUniqueElements(ele) {
  let unique = ele.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return unique;
}

const ele = [1, 2, 3, 2];
console.log(findUniqueElements(ele));

// Above solution explaination
/**
 *
 * here value mean current value
 * index mean index of current value like for 1 it will be 0
 * array mean the array [1,2,3,2]
 *
 * what array.indexOf(value) means => This returns the first occurrence of value in the array.
 *  means => for 1 its first occur is 0
 *  likewise for 2 its first occur is 1
 *  now if again 2 comes its occur will 1 only.
 *
 *  and likewise, if 2 comes again then array.indexof(2) is 1 but the index is 3.
 */

// ^ same you can do this with map

var myArray = ["a", 1, "a", 2, "1"];

let unique = [...new Set(myArray)]; // As Set is used to store unique values

console.log(unique);

console.log("=== Q5 ===");

function mergeTwoSortedArr(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];

  mergedArr.sort((a, b) => a - b);
  return mergedArr;
}

const arr1 = [4, 5, 6, 3, 9];
const arr2 = [3, 7, 8, 4, 5, 6];

console.log(mergeTwoSortedArr(arr1, arr2));

console.log("=== Q6 ===");

//^ Note: for frequency always use object to track how many times a particular element occurs.

const setOfArr = [1, 2, 3, 2, 4, 1];

const newObj = {};

for (const arr of setOfArr) {
  newObj[arr] = (newObj[arr] || 0) + 1;
}

console.log("Frequency of setOfArr Elements: ", newObj);

// another method
const nwewObj = {};
setOfArr.forEach((i) => {
  nwewObj[i] = (nwewObj[i] || 0) + 1;
});

console.log("In for loop: ", newObj);

console.log("=== Q7 ===");
// what does that mean?
// Given an array: arr=[1,2,3,4,5]
// Rotate Right by 2:
// Step 1: Take the last 2 elements ([4,5])
// Step 2: Move them to the front.
// Result: [4,5,1,2,3]
// How it works:

// Element 5 moves from position 4 to position 0.
// Element 4 moves from position 3 to position 1.
// The remaining elements ([1,2,3]) shift right to make room for [4,5].

// We only use % when k times is greater than arr.length or else it will take the default value which is given;

function kTimesRotation(arr, k) {
  let n = arr.length;
  k = k % n;
  console.log(k);

  const lastTwoNums = arr.splice(-k); // here we used -k for splicing out the last two elements in an array.
  const startingNums = arr.splice(0, n - k);

  return [...lastTwoNums, ...startingNums];
}

const rotationArr = [1, 2, 3, 4, 5];
const k = 1;

console.log(kTimesRotation(rotationArr, k));

// another way to do

function kTimesRotation(arr, k) {
  let n = arr.length;
  k = k % n;

  for (let i = 0; i < k; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
}

console.log(kTimesRotation(rotationArr, 2)); // this will give [3,4,5,1,2] => because we already executing it above so the arr we are using is [5,1,2,3,4]

console.log("=== Q8 ===");

// map => The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
const mapNum = [1, "soumya", 3];
const mapResult = mapNum.map((arr) => arr);
console.log(mapResult);

// filter => The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

// Reduce => its iterates all the elements present in array and sumUp them and give result
const reduceNums = [1, 2, 3];

const newReduceVal = reduceNums.reduce((acc, currVal) => {
  console.log(`acc:: ${acc} and currVal:: ${currVal}`);
  return acc + currVal; // so here acc is an empty var which takes value from which we have declared after curly barce (4)
}, 4);
console.log("newReduceVal", newReduceVal);

console.log("=== Q10 ===");

// Flat method helps to flat all the elements present in an array creates a new array with all sub-array elements concatenated

function deepFlatenArray(arr) {
  return arr.flat(Infinity);
}

const finalArray = [[[1, 2, 3]], [["a", "b", "c"]], [[true, false]]];
console.log(deepFlatenArray(finalArray));

// ====================  without using flat method =======================================
function deepFlatenArray(arr) {
  const result = []; // Initialize an empty array to store the flattened elements.

  function flatten(subArray) {
    for (const element of subArray) {
      if (Array.isArray(element)) {
        // If the element is an array, call the flatten function recursively.
        flatten(element);
      } else {
        // If the element is not an array, push it into the result array.
        result.push(element);
      }
    }
  }

  flatten(arr); // Start the recursive flattening process.
  return result; // Return the fully flattened array.
}

console.log("=== Q9 ===");
// Intersection of two arrays is an array that consists of all the common elements occurring in both arrays.

function intersectionOfArray(arr1, arr2) {
  const result = arr1.filter((value) => arr2.includes(value));
  return result;
}

console.log(intersectionOfArray([1, 2, 3, 4, 5], [2, 3, 4, 8, 9]));
