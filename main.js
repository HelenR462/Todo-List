const erand = document.querySelector("#erand");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

function addTask(e) {
  erand.addEventListener("keypress", (e) => {
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.innerHTML = input.checkbox;
    document.body.appendChild("checkbox");
    todoDiv.appendChild(checkbox);

    const newLi = document.createElement("li").value;
    newLi.innerText = li.value;
    newLi.classlist.add("task");
    todoDiv.appendChild(newLi);

    const trash = document.createElement("i");
    trash.innerHTML = '<i class="fa-solid fa-trash "></i>';
    trash.classList.add("clear");
    todoDiv.appendChild(trash);

    todoList.appendChild(todoDiv);
  });
}

// CHECKBOX FUNCTION (strikethrough when checked. able to do & undo strikethrough)//

let checkbox = document.getElementById("checkbox");
const myTask = document.querySelector(".task");

function done() {
  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked === "checkbox") {
      checkbox.type = "checkbox";
    } else {
      checkbox.type = "";
    }

    if (checkbox.checked === true) {
      myTask.style.display = "line-through";
    } else {
      myTask.style.display = "none";
    }
  });
}

// TRASH BIN FUNCTION (be clickable + to clear and unclear)//

// RESET FUNCTION ( delete all output)
const button = document.getElementById("reset");

function reset() {
  reset.addEventListener("click", "delete");
  output.innerHTML = button.value;
}
