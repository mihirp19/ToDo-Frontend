import React from "react";
import { addTasks } from "../api/api";
import { handleTaskUpdate } from "../utils/util";

const TaskForm = ({
  tasks,
  setTasks,
  task,
  isUpdate,
  title,
  setTitle,
  setIsUpdate,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (isUpdate) {
        handleTaskUpdate(task, title, tasks, setTasks);
      } else {
        addTasks({ title }).then((res) => {
          setTasks([res.data, ...tasks]);
        });
      }
      setTitle("");
      setIsUpdate(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={isUpdate ? "Update Task" : "Add New Task"}
        required
      />
      <button type="submit" className="add-btn">
        {isUpdate ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
