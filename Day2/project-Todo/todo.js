const taskInput = document.querySelector("#taskInput");
const taskAddBtn = document.querySelector("#taskAddBtn");
const listTaskSection = document.querySelector("#listTaskSection");

let todoLists = [];

function addTodo() {
  todoLists.push(taskInput.value);
  console.log("TODO-LISTS: ", todoLists);
  showTodoTasks();
}

taskAddBtn.addEventListener("click", addTodo);

function showTodoTasks() {
  listTaskSection.innerHTML = ""; //Reseting the list content whenever we print the todos, so we don't end up with duplicate todo items.
  const ul = document.createElement("ul");
  ul.classList = "taskContainer";
  if (todoLists.length > 0) {
    todoLists.forEach((task, index) => {
      const li = document.createElement("li");
      li.classList = "liClass";
      li.setAttribute("data-index", index); // Assign a unique index to each task
      const span = document.createElement("span");
      span.classList = "spanClass";
      span.innerHTML = `
        <img id="binBtn" src="image.png" alt="bin" width="20px" height="20px">  
      `;
      li.textContent = `${task}`;
      li.appendChild(span);
      ul.appendChild(li);

      listTaskSection.appendChild(ul);
      const binBtn = document.querySelector("#binBtn");
      binBtn.addEventListener("click", () => deleteTasks(index));
      li.querySelector(".liClass").addEventListener("click", () => {
        markOutTasks(li);
      });
    });
  }
}

function deleteTasks(index) {
  todoLists.splice(index, 1);
  console.log(todoLists);

  // Re-render the tasks
  showTodoTasks();
}

function markOutTasks(li) {
  li.style.textDecoration = "line-through";
}

// Need to optimize it
