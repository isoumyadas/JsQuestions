// Write a custom version of .map() using for.

function mapTheValue(val, callback) {
  let copyArr = [];
  for (let i = 0; i < val.length; i++) {
    copyArr.push(callback(val[i], i));
  }

  return copyArr;
}

const input = ["map", "filter", "ocean", "river"];
const output = mapTheValue(input, (i) => i);
console.log(output);
