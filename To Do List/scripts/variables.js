let doneTasks = 0;

const getDoneTasks = () => doneTasks;

const incrementDoneTasks = () => {
  doneTasks += 1;
};

const decrementDoneTasks = () => {
  doneTasks -= 1;
};

let ongoingTasks = 0;

const checkedImgPath = "./images/checked.png";
const uncheckedImgPath = "./images/unchecked.png";
const deleteImgPath = "./images/delete.png";

const images = {
  checkedImgPath,
  uncheckedImgPath,
  deleteImgPath,
};

export { getDoneTasks, incrementDoneTasks, decrementDoneTasks, images };
