import React from "react";

const Todo = ({ todo, todos, title, setTodos }) => {
    const deleteHandler = () => {
        const deleteList = todos.filter((item) => item.id !== todo.id);
        setTodos(deleteList)
    }
  return (
    <div>
      <li>
        {title}
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </div>
  );
};

export default Todo;
