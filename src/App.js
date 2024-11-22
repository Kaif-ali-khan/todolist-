import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
  };

  const updateItem = (index, updatedItem) => {
    const newListTodo = [...listTodo];
    newListTodo[index] = updatedItem;
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TodoList</h1>
        <TodoInput addList={addList} />
        <hr />
        <ul>
          {listTodo.map((listItem, i) => (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              updateItem={updateItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
