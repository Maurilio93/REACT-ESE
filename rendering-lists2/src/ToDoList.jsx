import React, { useState } from "react";

function MyList({ todo, onRemove }) {
  return (
    <li>
      <h3>{todo}</h3>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const addTodos = () => {
    if (inputVal !== "") {
      const newTodo = {
        task: inputVal
      };
      setTodos([...todos, newTodo]);
      setInputVal("");
    } else {
      alert("Il campo di input non può essere vuoto");
    }
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <MyList
            key={index}
            todo={todo.task}
            onRemove={() => removeTodo(index)}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={handleInputChange}
          placeholder="Inserisci un nuovo compito"
        />
        <button onClick={addTodos}>Aggiungi</button>
        <button onClick={resetTodos}>Reset</button>
      </div>
    </div>
  );
}