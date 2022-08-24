import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Seans Todo</h1>
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
  );
}

export default App;
