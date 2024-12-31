import React, { useState } from "react";

function InputComponent(props) {
  // State to manage the current input value
  const [input, setInput] = useState('');

  // Event handler for adding a new task when the Enter key is pressed
  const handleEnterPress = (e) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (e.keyCode === 13) {
      // Add the task using the prop method and reset the input field
      props.addTask(input);
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="input-container">
      {/* Input field for entering a new task */}
      <input
        type="text"
        className="input-box"
        placeholder="Enter your task"
        value={input} // Bind the input value to the state
        onChange={(e) => {
          setInput(e.target.value); // Update the input state with the new value
        }}
        onKeyDown={handleEnterPress} // Trigger adding task when Enter is pressed
      />

      {/* Button to add the task manually */}
      <button className="add-btn"
          onClick={() => {
          props.addTask(input); // Add the task
          setInput(""); // Clear the input field after adding
        }}
      >
        +
      </button>
    </div>
  );
}

export default InputComponent;