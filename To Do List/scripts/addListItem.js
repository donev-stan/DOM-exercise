import attachEventListeners from "./attachEventListeners.js";
import { images, incrementOngoingTasks } from "./variables.js";

const addListItem = (todoText) => {
  const list = document.querySelector(".list");

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const deleteItemDiv = document.createElement("div");
  deleteItemDiv.classList.add("delete-item-box");
  itemDiv.appendChild(deleteItemDiv);

  const deleteItemImgBtn = document.createElement("img");
  deleteItemImgBtn.classList.add("delete-item-img-btn");
  deleteItemImgBtn.src = images.deleteImgPath;
  deleteItemDiv.appendChild(deleteItemImgBtn);

  const checkItemDiv = document.createElement("div");
  checkItemDiv.classList.add("check-item-box");
  itemDiv.appendChild(checkItemDiv);

  const checkItemImgBtn = document.createElement("img");
  checkItemImgBtn.classList.add("check-item-img-btn");
  checkItemImgBtn.src = images.uncheckedImgPath;
  checkItemImgBtn.dataset.checked = false;
  checkItemDiv.appendChild(checkItemImgBtn);

  const listItemText = document.createElement("div");
  listItemText.classList.add("list-item-text");
  listItemText.innerText = todoText;
  itemDiv.appendChild(listItemText);

  list.appendChild(itemDiv);

  incrementOngoingTasks();

  attachEventListeners(checkItemImgBtn, deleteItemImgBtn);
};

export default addListItem;

/*
 <div class="item">
    <div class="check-item-box">
        <img
        src="./images/unchecked.png"
        class="check-item-img-btn"
        data-checked="false"
        />
    </div>
    <div class="list-item-text">Do Homework</div>
    <div class="delete-item-box">
        <img src="./images/delete.png" class="delete-item-img-btn" />
    </div>
</div>
*/
