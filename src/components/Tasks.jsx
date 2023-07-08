import "./Tasks.css";

export function Tasks({ tasks, handleDeleteTask }) {
  const handleDelete = (task) => {
    console.log(task);
    handleDeleteTask(task);
  };
  return (
    <section className="task-list">
      {tasks.map((task) => {
        //how to do unique key
        return (
          <div className="task" key={task}>
            <p>{task}</p>
            <button onClick={() => handleDelete(task)}>X</button>
          </div>
        );
      })}
      <p>You have {tasks.length} pending tasks</p>
    </section>
  );
}
