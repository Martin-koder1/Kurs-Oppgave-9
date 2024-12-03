const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addButton = document.querySelector("#addButton");

function addItem() {
  const inputValue = inputField.value;
  console.log(inputValue)

  const li = document.createElement("li");
  li.textContent = inputValue;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Slett";
  removeButton.classList.add("remove-btn");

  removeButton.addEventListener("click", function () {
    removeItem(li);
  });

  li.appendChild(removeButton);

  list.appendChild(li);

  inputField.value = '';
}

function removeItem(li) {
  list.removeChild(li);
}

addButton.addEventListener("click", addItem);