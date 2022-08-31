import { decrementDoneTasks } from "./variables.js";

const handleDelete = (target) => {
  target.parentElement.parentElement.remove();

  const isChecked =
    target.parentElement.parentElement.querySelector(".check-item-img-btn")
      .dataset.checked === "true"
      ? true
      : false;

  if (isChecked) decrementDoneTasks();
};

export default handleDelete;
