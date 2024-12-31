import React, { useState, useEffect } from 'react';
import "./App.css";
import InputComponent from './Components/InputComponent';
import ListComponent from './Components/ListComponent';

function App() {
  // Initialize the state by loading the tasks from localStorage (if any)
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem('todoList');
    return savedList ? JSON.parse(savedList) : []; // Parse the saved list if exists, otherwise return an empty array
  });

  // Save list to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]); // This effect runs every time `list` changes

  // Function to add task to the list
  let addTask = (input) => {
    if (input !== '') {
      setList([...list, input]); // Add the new task to the list
    }
  };

  // Function to delete task from the list
  const deleteTask = (key) => {
    let newList = [...list]; // Create a copy of the list
    newList.splice(key, 1); // Remove the task from the list
    setList(newList); // Update the state with the new list
  };

  return (
    <div className="container">
      <div className="task-box">
        {/* Input component */}
        <InputComponent addTask={addTask} />

        <h1 className="title">TO-DO TASK</h1>

        <hr />

        {/* Render the list of tasks */}
        {list.map((listTask, i) => (
          <ListComponent key={i} index={i} task={listTask} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;