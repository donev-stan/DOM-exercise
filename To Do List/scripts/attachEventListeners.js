import handleCheck from "./handleCheck.js";
import handleDelete from "./handleDelete.js";

const attachEventListeners = (checkboxImgBtn, deleteImgBtn) => {
  checkboxImgBtn.addEventListener("click", ({ target }) => handleCheck(target));
  deleteImgBtn.addEventListener("click", ({ target }) => handleDelete(target));
};

export default attachEventListeners;
