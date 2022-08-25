import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import SearchList from "./components/SearchList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchText);
    });
    setFilteredTodos(newFilteredTodos)
  }, [searchText]);

  const searchHandler = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };
  return (
    <div className="App">
      <h1>SEANS TODO LIST</h1>
      <div className="todo-container">
        <div className="todo-list">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            setTodos={setTodos}
          />
          <TodoList
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div className="todo-search">
          <Search searchHandler={searchHandler} />
          <SearchList filteredTodos={filteredTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
