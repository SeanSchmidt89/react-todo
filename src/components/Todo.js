import React from "react";
import Button from "react-bootstrap/Button";

const Todo = ({ todo, todos, title, setTodos }) => {
  const deleteHandler = () => {
    const deleteList = todos.filter((item) => item.id !== todo.id);
    setTodos(deleteList);
  };

  const completeHandler = () => {
    const completedList = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(completedList);
  };
  return (
    <div>
      <p className={todo.completed ? "completed " : ""}>
        {title}
        <Button
          onClick={completeHandler}
          className="todo-button"
          variant="outline-light"
          size="sm"
        >
          ✓
        </Button>
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
