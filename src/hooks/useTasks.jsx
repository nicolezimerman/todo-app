// @ts-check
import { useState } from "react";

/**
 * @typedef {{
 *   id: string;
 *   title: string;
 *   description: string;
 *   status: 'initial' | 'completed';
 * }} Task
 */

/**
 * @type {Task[]}
 */
const initialStateTasks = [];

function generateRandomString() {
  return Math.random().toString(36).substring(2, 15);
}

export default function useTasks() {
  const [tasks, setTasks] = useState(initialStateTasks);

  /**
   * @param {string} task
   */
  const isDuplicated = (task) => {
    return tasks.some((taskItem) => taskItem.title === task);
  };

  /**
   * @param {string} taskToAdd
   */
  const addTask = (taskToAdd) => {
    if (isDuplicated(taskToAdd)) {
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: generateRandomString(),
        title: taskToAdd,
        description: "",
        status: "initial",
      },
    ]);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  /**
   * @param {string} taskToDeleteId
   */
  const removeTask = (taskToDeleteId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((taskItem) => taskItem.id !== taskToDeleteId)
    );
  };

  /**
   * @param {string} taskToEditId
   * @param {string} newValue
   */
  const editTask = (taskToEditId, newValue) => {
    if (isDuplicated(newValue)) return;

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id !== taskToEditId) {
          return task;
        } else {
          return { ...task, title: newValue };
        }
      })
    );
  };

  return { tasks, addTask, removeAllTasks, removeTask, editTask, isDuplicated };
}
