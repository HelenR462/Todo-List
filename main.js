const erand = document.querySelector("#erand");
const output = document.querySelector("#output");
const todo = document.querySelector(".todo");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();
  if (erand.value === "") return;

  const newLi = document.createElement("li");
  newLi.classList.add("task");

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
  newLi.appendChild(doneCheckbox);

  const par = document.createElement("p");
  par.innerText = erand.value;
  par.setAttribute("class", "text");
  newLi.appendChild(par);

  // TRASHBIN
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.classList.add("btn");

  trashButton.onclick = (e) => {
    e.target.parentElement.parentElement.remove(newLi);
  };

  newLi.appendChild(trashButton);

  todo.appendChild(newLi);

  erand.value = "";
}
// RESET FUNCTION ( delete all output)
const todoDiv = document.getElementsByClassName("todo");
const resetButton = document.getElementById("reset");

resetButton.onclick = (e) => {
  e.target.parentElement.parentElement.removeChild(todo);

  location.reload();
};
