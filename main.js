const erand = document.querySelector("#erand");
const output = document.querySelector("#output");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

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
  todoDiv.appendChild(doneCheckbox);

  const newLi = document.createElement("li");
  newLi.innerHTML = erand.value;
  newLi.setAttribute("class", "task");
  todoDiv.appendChild(newLi);
  erand.value = "";

  // TRASHBIN
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.classList.add("btn");

  trashButton.onclick = (e) => {
    console.log(e.target.parentElement.parentElement.removeChild(newLi));

    trashButton.ondblclick = (e) => {
      console.log(e.target.parentElement.parentElement.remove(todoDiv));
    };
  };

  todoDiv.appendChild(trashButton);

  output.appendChild(todoDiv);
}
// RESET FUNCTION ( delete all output)

const todoDiv = document.getElementsByClassName("todo");

const reset = document.getElementById("reset");

reset.onclick = (e) => {
  e.preventDefault();

  console.log(e.target.parentElement.parentElement.removeChild(list));
};
