import addListItem from "./addListItem.js";
import elements from "./elements.js";
import handleCheck from "./handleCheck.js";
import handleDelete from "./handleDelete.js";

// Attach Check Ev to Existing Items
elements.checkBtns().forEach((imgCheckBtn) => {
  imgCheckBtn.addEventListener("click", () => handleCheck(imgCheckBtn));
});

// Attach Delete Ev to Existing Items
elements.deleteBtns().forEach((imgDeleteBtn) => {
  imgDeleteBtn.addEventListener("click", () => handleDelete(imgDeleteBtn));
});

// Input Field Search
elements.inputField().addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputText = event.target.value.trim();

    if (inputText !== "") {
      addListItem(inputText);
      elements.inputField().value = "";
    }
  }
});

// Button Search
elements.inputBtn().addEventListener("click", () => {
  addListItem(elements.inputField().value);
  elements.inputField().value = "";
});

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
  savedTasks.forEach(({ id, todoText, checked }) => {
    addListItem(todoText, id, checked);
  });
}
