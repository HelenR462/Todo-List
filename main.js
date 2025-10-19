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

  const doneCheckbox = document.createElement("input");
  doneCheckbox.setAttribute("type", "checkbox");

  doneCheckbox.addEventListener("click", () => {
    if (doneCheckbox.checked) {
      newLi.style.textDecoration = "line-through";
    } else {
      newLi.style.textDecoration = "none";
    }
  });
  newLi.appendChild(doneCheckbox);

  const par = document.createElement("p");
  par.innerText = erand.value;
  par.setAttribute("class", "text");
  newLi.appendChild(par);

  
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash clear"></i>';
  trashButton.classList.add("btn");

  trashButton.onclick = (e) => {
    newLi.remove();
  };

  newLi.appendChild(trashButton);

  todo.appendChild(newLi);

  erand.value = "";
}
const resetButton = document.getElementById("reset");

resetButton.onclick = () => {
   todo.innerHTML = "";
 
};
