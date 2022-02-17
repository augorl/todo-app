import React from 'react';
import './TodoItem.css';

// const onCompleted = () => alert('Haz completado la tarea');
// const onDelete = () => alert('Haz eliminado la tarea');

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onCompleted}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete" 
      onClick={props.onDeleted}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };