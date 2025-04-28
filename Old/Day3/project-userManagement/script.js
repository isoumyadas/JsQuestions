const employeesList = [];
let id = 0;

function addEmployee(age, name, role) {
  if (age && name && role) {
    const newEmp = { age, name, role, id: id++ }; // Don't use age:age, name:name if key and param are same.
    employeesList.push(newEmp);
    return newEmp;
  } else {
    return "Employee is not added";
  }
}

function viewEmployees() {
  if (employeesList.length > 0) {
    // employeesList.forEach((item) => console.log(item)); // You can use this
    console.table(employeesList); // or this for looking good
  } else {
    console.log("No employees found");
  }
}

function editEmployee(newAge, newRole, reName) {
  const edit = employeesList.find((item) => item.id === 1); // using filter will give you result in array.

  if (edit) {
    //editing the employee
    edit["age"] = newAge;
    edit["role"] = newRole;
    return "Employee Updated";
  }
  return "Employee not found";
}

console.log("Added Employee: ", addEmployee(23, "Soumya", "B.E Engineer"));
console.log("Added Employee: ", addEmployee(23, "Rohit", "F.E Engineer"));
viewEmployees();
console.log("Edited Employee: ", editEmployee(34, "Devops Engineer"));
viewEmployees();
