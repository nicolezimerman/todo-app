import "./Tasks.css";
import Task from "./Task";

export function Tasks({ tasks, handleDeleteTask, handleEditTask }) {
  return (
    <section className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleDelete={() => handleDeleteTask(task)}
          handleEdit={handleEditTask}
        />
      ))}
      <p>You have {tasks.length} pending tasks</p>
    </section>
  );
}
