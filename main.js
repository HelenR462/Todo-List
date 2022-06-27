const task = document.querySelector("#taskTodo");
const input = document.querySelectorAll("input");
const output = document.querySelector("list");

// Enter Task on input area
function addTask() {
  task.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      return input.value;
    }
  });
}

// create list Item/ input
function createItem(text) {
  const listItem = document.createElement("li");
  Item.push((addTask.value = "Wash car"));
  newItem.textContent = text;
  newItem.setAttribute("class", "addTask");
  return newItem;
}

function listDisplay(listItem) {
  let newItem = document.createTextNode("Make dinner");
  task.appendChild(input.values);
  document.insertBefore(task, newItem);
}

let button = document.getElementById("submit");
button.addEventListener("click", addTask);
