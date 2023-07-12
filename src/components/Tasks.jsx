import "./Tasks.css";
import Task from "./Task";

export function Tasks({ tasks, handleDeleteTask, handleEditTask }) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={() => handleDeleteTask(task.id)}
          handleEdit={handleEditTask}
        />
      ))}
      <p>You have {tasks.length} pending tasks</p>
    </section>
  );
}
