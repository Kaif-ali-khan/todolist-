import React, { useState } from "react";

const TodoList = ({ item, deleteItem, index, updateItem }) => {
  const [edit, setEdit] = useState(false);
  const [newItem, setNewItem] = useState(item);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleUpdateClick = () => {
    updateItem(index, newItem);
    setEdit(false);
  };

  return (
    <li className="list-item">
      {edit ? (
        <div>
          <input
            type="text"
            value={newItem}
            onChange={handleInputChange}
            className="input-box-todo"
          />
        </div>
      ) : (
        <span>{item}</span>
      )}

      <span className="icons">
        {edit ? (
          <button onClick={handleUpdateClick} className="update-btn">
            Update
          </button>
        ) : (
          <i className="fa-regular fa-pen-to-square" onClick={handleEdit}></i>
        )}

        <i
          className="fa-solid fa-trash icon-delete"
          onClick={() => {
            deleteItem(index);
          }}
        ></i>
      </span>
    </li>
  );
};

export default TodoList;
