import { useCallback, useState } from "react";
import "./App.css";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //check if task not already exists:
    const isDuplicated = [...tasks].some((taskItem) => taskItem == task);
    if (isDuplicated) return;
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((taskItem) => taskItem !== taskToDelete)
    );
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add your task..."
          name="text"
          value={task}
          onChange={handleChange}
        />
        <button>+</button>
      </form>
      <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
      <button onClick={handleClearTasks}>Clear All</button>
    </>
  );
}

export default App;
