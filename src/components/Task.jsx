import { useState } from "react";
import "./Task.css";

export default function Task({ task, handleDelete, handleEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleEditTask = () => {
    handleEdit(task, editValue);
    setEditMode(false);
  };

  return (
    <div className="task">
      {editMode ? (
        <input
          class="input-text"
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <p>{task}</p>
      )}
      <div className="actions">
        {editMode ? (
          <button className="edit" onClick={handleEditTask}>
            Save
          </button>
        ) : (
          <button className="edit" onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
        <button className="delete" onClick={() => handleDelete(task)}>
          Delete
        </button>
      </div>
    </div>
  );
}
