const erand = document.querySelector("#erand");
const output = document.querySelector("#output");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const doneCheckbox = document.createElement("input");
  doneCheckbox.setAttribute("type", "checkbox");

  doneCheckbox.check = (e) => {
    if (doneCheckbox.checked == true) {
      console.log(
        (e.target.newLi.innerText.style.textDecoration = "line-through")
      );
    } else {
      if (doneCheckbox.checked == false) {
        console.log((e.target.newLi.innerText.style.textDecoration = "none"));
      }
    }
  };
  todoDiv.appendChild(doneCheckbox);

  const newLi = document.createElement("li");
  newLi.innerHTML = erand.value;
  newLi.setAttribute("class", "task");
  todoDiv.appendChild(newLi);
  erand.value = "";

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.onclick = (e) => {
    // I need if statment here to toggle
    console.log(e.target.parentElement.parentElement.removeChild(newLi));
  };
  trashButton.classList.add("btn");
  todoDiv.appendChild(trashButton);

  output.appendChild(todoDiv);
}
// // RESET FUNCTION ( delete all output)
// const resetButton = document
//   .querySelector("#reset")
//   .addEventListener("click", (e) => reset(e));

// function reset(e) {
//   document.querySelectorAll("erand").reset;
// }
