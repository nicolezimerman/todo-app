// @ts-check
import * as React from "react";
import { useState } from "react";
import "./Task.css";

/**
 * @param {{
 *   task: import('../hooks/useTasks').Task
 *   handleDelete: (id: string) => void
 *   handleEdit: (id: string, newValue: string) => void
 * }} param0
 */
export default function Task({ task, handleDelete, handleEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEditTask = () => {
    handleEdit(task.id, editValue);
    setEditMode(false);
  };

  return (
    <div className="task">
      {editMode ? (
        <input
          className="input-text"
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <p>{task.title}</p>
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
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
