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
    if (isDuplicated || task === "") return;
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

  //its ok not to use index directly?
  const handleEditTask = (taskToEdit, editedTask) => {
    //get position of the element in the array
    const taskIndex = tasks.findIndex((taskItem) => taskItem == taskToEdit);
    //create a copy of the state
    const tasksCopy = [...tasks];
    //edit the new array with the new value of the task
    tasksCopy[taskIndex] = editedTask;
    //set the new array
    setTasks(tasksCopy);
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
        <button>Add</button>
      </form>
      <Tasks
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
      <button onClick={handleClearTasks}>Clear All</button>
    </>
  );
}

export default App;
