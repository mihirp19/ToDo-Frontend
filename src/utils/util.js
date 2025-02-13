import { updateTask } from "../api/api";

const handleError = (errorMessage) => {
  alert(errorMessage);
};

export const handleTaskUpdate = (task, title, tasks, setTasks) => {
  updateTask(task._id, {
    title,
    completed: task.completed,
  }).then((res) => {
    if (res.status === 200) {
      const newTasks = tasks.map((t) => {
        if (t._id === res.data._id) {
          return res.data;
        }
        return t;
      });
      setTasks(newTasks);
    } else if (res.status === 404) {
      handleError("Task not found!");
    } else {
      handleError("Something went wrong!");
    }
  });
};
