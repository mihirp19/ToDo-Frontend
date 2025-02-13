import React from "react";

const TaskList = ({ tasks, deleteTask, onUpdateTaskClick }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item">
          <span className="task-text">{task.title}</span>
          <button
            className="complete-btn"
            onClick={() => onUpdateTaskClick(task)}
          >
            Update
          </button>
          <button className="delete-btn" onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
