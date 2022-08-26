import React from "react";

const SearchList = ({ filteredTodos }) => {
  return (
    <div>
      <h4>Todos :</h4>
      <hr />
      {filteredTodos.map((todo) => (
        <p key={todo.id} className={todo.completed ? "completed " : ""}>Title : {todo.title}</p>
      ))}
    </div>
  );
};

export default SearchList;
