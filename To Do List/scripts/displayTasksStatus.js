import elements from "./elements.js";
import { getDoneTasks, getOngoingTasks } from "./variables.js";

const displayTasksStatus = () => {
  elements.completedTasksResult().innerHTML = getDoneTasks();
  elements.ongoingTasksResult().innerHTML = getOngoingTasks();
};

export default displayTasksStatus;
