const erand = document.querySelector("#erand");
const output = document.querySelector("#output");
const todo = document.querySelector(".todo");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();

  for (i = 0; i < erand.length; i++) {
    if (erand.length == 0) {
      console.log("");
    }
  }

  const listDiv = document.createElement("div");
  listDiv.classList.add("list");

  // CHECKBOX
  const doneCheckbox = document.createElement("input");
  doneCheckbox.setAttribute("type", "checkbox");

  doneCheckbox.addEventListener("click", (e) => {
    if (doneCheckbox.checked == true) {
      newLi.style.textDecoration = "line-through";
    } else {
      if (doneCheckbox.checked == false) {
        newLi.style.textDecoration = "none";
      }
    }
  });
  listDiv.appendChild(doneCheckbox);

  const output = document.createElement("ul");
  output.setAttribute("id", "output");
  listDiv.appendChild(output);

  const newLi = document.createElement("li");
  newLi.innerHTML = erand.value;
  newLi.setAttribute("class", "task");
  output.appendChild(newLi);
  erand.value = "";

  // TRASHBIN
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.classList.add("btn");

  trashButton.onclick = (e) => {
    console.log(e.target.parentElement.parentNode.remove(listDiv));
  };

  listDiv.appendChild(trashButton);

  todo.appendChild(listDiv);
}
// RESET FUNCTION ( delete all output)
const todoDiv = document.getElementsByClassName("todo");
const resetButton = document.getElementById("reset");

resetButton.onclick = (e) => {
  console.log(e.target.parentElement.parentElement.removeChild(todo));
};
