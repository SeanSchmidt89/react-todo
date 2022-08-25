import React from "react";
import Button from 'react-bootstrap/Button';

const Todo = ({ todo, todos, title, setTodos }) => {
  const deleteHandler = () => {
    const deleteList = todos.filter((item) => item.id !== todo.id);
    setTodos(deleteList);
  };
  return (
    <div>
      <p>
        {title}
        <Button
          onClick={deleteHandler}
          className="todo-button"
          variant="outline-light"
          size="sm"
        >
          Delete
        </Button>
      </p>
    </div>
  );
};

export default Todo;
