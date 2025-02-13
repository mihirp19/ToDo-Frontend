import React, { useEffect, useState } from "react";
import "./App.css";
import { deleteTask, getTasks } from "./api/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app-container">
      <TaskForm
        setTasks={setTasks}
        tasks={tasks}
        task={task}
        setTitle={setTitle}
        title={title}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      <TaskList
        tasks={tasks}
        onUpdateTaskClick={(task) => {
          setTask(task);
          setTitle(task.title);
          setIsUpdate(true);
        }}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
