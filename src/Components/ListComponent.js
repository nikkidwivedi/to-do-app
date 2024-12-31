import React from 'react';

function ListComponent(props) {
  return (
    <li className="list-task">
      {/* Display the task text */}
      {props.task}

      <span className="delete-btn">
        {/* Trash icon for deleting the task */}
        <i className="fa-solid fa-trash"
            onClick={(e) => {
            // Call the deleteTask function passed down as a prop, passing the index of the task to delete
            props.deleteTask(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default ListComponent;