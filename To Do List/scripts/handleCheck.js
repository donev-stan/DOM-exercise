import {
  decrementDoneTasks,
  decrementOngoingTasks,
  images,
  incrementDoneTasks,
  incrementOngoingTasks,
} from "./variables.js";

const handleCheck = (imgBtn) => {
  const checked = imgBtn.dataset.checked;
  const isChecked = checked === "true" ? false : true;

  const text = imgBtn.parentElement.nextElementSibling;

  imgBtn.dataset.checked = isChecked;

  if (isChecked) {
    imgBtn.src = images.checkedImgPath;
    text.classList.add("task-done");
    incrementDoneTasks();
    decrementOngoingTasks();
  } else {
    imgBtn.src = images.uncheckedImgPath;
    text.classList.remove("task-done");
    decrementDoneTasks();
    incrementOngoingTasks();
  }
};

export default handleCheck;
