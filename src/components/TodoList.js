import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h3>Todos List</h3>
      {todos.map((todo) => (
        <ul>
          <Todo
            key={todo.id}
            todo={todo}
            title={todo.title}
            setTodos={setTodos}
            todos={todos}
          />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
