import handleCheck from "./handleCheck.js";

const attachEventListeners = (checkboxImgBtn, deleteImgBtn) => {
  checkboxImgBtn.addEventListener("click", ({ target }) => handleCheck(target));
};

export default attachEventListeners;
