import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h4>Todos</h4>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          title={todo.title}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoList;
