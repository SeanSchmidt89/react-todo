import React from "react";

const SearchList = ({ filteredTodos }) => {
  return (
    <div>
      <h4>Todos</h4>
      {filteredTodos.map((todo) => (
        <p key={todo.id}>name: {todo.title}</p>
      ))}
    </div>
  );
};

export default SearchList;
