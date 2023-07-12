import { useCallback, useState } from "react";
import "./App.css";
import { Tasks } from "./components/Tasks";
import useTasks from "./hooks/useTasks";

const taskInputName = "task";

function App() {
  const { tasks, addTask, removeTask, editTask, removeAllTasks, isDuplicated } =
    useTasks();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //check if task not already exists:

    const data = new FormData(event.currentTarget);

    const taskValue = data.get(taskInputName);

    if (isDuplicated(taskValue) || taskValue === "") return;
    addTask(taskValue);
    //setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add your task..."
          name={taskInputName}
        />
        <button>Add</button>
      </form>
      <Tasks
        tasks={tasks}
        handleDeleteTask={removeTask}
        handleEditTask={editTask}
      />
      <button onClick={removeAllTasks}>Clear All</button>
    </>
  );
}

export default App;
