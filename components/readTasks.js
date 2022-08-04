import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "./services/date.js";

export const readTasks = () => {
  const list = document.querySelector("[data-list]");
  console.log(list);

  const taskList = JSON.parse(localStorage.getItem('task')) || [];
  const dates = uniqueDates(taskList);
  console.log(dates);

  dates.forEach(date => {
    const dateMoment = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      console.log(taskDate);
      list.appendChild(createTask(task));
    });
  });
}