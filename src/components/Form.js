import React from "react";

const Form = ({ inputText, setInputText, setTodos }) => {
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: inputText,
      completed: false,
    };
    setTodos((prevList) => [...prevList, todo]);
    setInputText("");
  };
  return (
    <div>
      <h2>- Add -</h2>
      <input
        onChange={inputHandler}
        value={inputText}
        placeholder="add a todo"
      />
      <button onClick={buttonHandler} className='form-button'>Add</button>
    </div>
  );
};

export default Form;
