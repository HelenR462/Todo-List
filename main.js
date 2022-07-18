const erand = document.querySelector("#erand");
const output = document.querySelector("#output");
const todo = document.querySelector(".todo");
const addTaskButton = document
  .querySelector("#submit")
  .addEventListener("click", (e) => addTask(e));

// if (erand.value.length > 0) return (submit.disabled = false);
//  (submit.disabled = true);

// erand.addEventListener("click", (e) => {
//   if (erand.value.length > 0) {
//     addTaskButton.disabled = false;
//   } else {
//     addTaskButton.disabled = true;
//   }
// });

function addTask(e) {
  e.preventDefault();
  if (erand.value === "") return;
  // const listDiv = document.createElement("div");
  // listDiv.classList.add("list");

  // const newUl = document.createElement("ul");
  // newUl.setAttribute("id", "output");
  // listDiv.appendChild(newUl);

  const newLi = document.createElement("li");
  newLi.classList.add("task");
  // newUl.appendChild(newLi);

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
    console.log(e.target.parentElement.parentElement.parentNode.remove(newLi));
  };

  newLi.appendChild(trashButton);

  todo.appendChild(newLi);

  erand.value = "";
}
// RESET FUNCTION ( delete all output)
const todoDiv = document.getElementsByClassName("todo");
const resetButton = document.getElementById("reset");

resetButton.onclick = (e) => {
  console.log(e.target.parentElement.parentElement.removeChild(todo));
};
