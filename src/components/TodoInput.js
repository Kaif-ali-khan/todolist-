import React, { useState } from "react";

const TodoInput = ({addList}) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
        addList(inputText)
        setInputText("")
    }
  }  
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Task"
        value={inputText}
        onKeyDown={handleEnterPress}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
