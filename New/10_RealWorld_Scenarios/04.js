// Create a small utility: deepEqual(obj1, obj2)

// Utility: In programming, "utility" refers to a small, reusable function or tool that performs a common or helpful task.

function deepCheckNestedObject(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepCheckNestedObject(obj1[key], obj2[key]))
      return false;
  }

  return true;
}

const obj1 = {
  name: "soumya",
  profile: {
    username: "soummy.a",
    age: 23,
    height: `181cm`,
    weight: `73kg`,
  },
  city: "Boisar",
  state: "Maharashtra",
  hobbies: ["Football", "Reading", "Editing"],
};

const obj2 = {
  name: "soumya",
  profile: {
    username: "soummy.a",
    age: 23,
    height: `181cm`,
    weight: `73kg`,
  },
  city: "Boisar",
  state: "Maharashtra",
  hobbies: ["Football", "Reading", "Editing"],
};

console.log(deepCheckNestedObject(obj1, obj2));
