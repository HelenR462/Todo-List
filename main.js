const erand = document.querySelector("#erand").focus();
const output = document.querySelector("#output");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

function addTask() {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const doneCheckbox = document.createElement("input");
  doneCheckbox.setAttribute("type", "checkbox");
  doneCheckbox.appendChild("input");
  todoDiv.appendChild(doneCheckbox);

  const newLi = document.createElement("li");
  newLi.innerText = erand.value;
  newLi.classlist.add("task");
  todoDiv.appendChild(newLi);
  output.insertAdjacentHTML("beforeend", newLi);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.classList.add("btn");
  todoDiv.appendChild(trashButton);

  output.appendChild(todoDiv);
}

// CHECKBOX FUNCTION (strikethrough when checked. able to do & undo strikethrough)//

let taskCompleted = document.querySelector(".task");
let checkbox = document
  .getElementById("checkbox")
  .addEventListener("checked", (e) => done(e));

function done() {
  if (taskCompleted === true) {
    return checkbox.checked && task.style.textDecoration == "line-through";
  } else {
    return (checkbox.default = "");
  }
}

//TRASH BIN FUNCTION (be clickable + to clear and unclear)//

const erandCompleted = document
  .querySelector(".clear")
  .addEventListener("click", (e) => deleteErand(e));
function deleteErand() {
  if (taskCompleted === true) {
    document.getElementsByClassName(clear).parentElement.remove();
  } else {
    return erand.default;
  }
}
// RESET FUNCTION ( delete all output)
function reset() {
  const resetButton = document
    .querySelector("#reset")
    .addEventListener("click", (e) => {
      reset.parentElement.remove();
    });
}
