import addListItem from "./addListItem.js";
import elements from "./elements.js";
import handleCheck from "./handleCheck.js";

document.querySelectorAll(".check-item-img-btn").forEach((imgBtn) => {
  imgBtn.addEventListener("click", (e) => {
    handleCheck(imgBtn);
  });
});

// Input Field Search
elements.inputField().addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addListItem(event.target.value);
    elements.inputField().value = "";
  }
});

// Button Search
elements.inputBtn().addEventListener("click", () => {
  addListItem(elements.inputField().value);
  elements.inputField().value = "";
});
