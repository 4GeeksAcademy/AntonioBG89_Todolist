import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

const ToDoComponent = ({ todo, onDelete }) => {
  return (
    <div className="container estiloListaTodos d-flex justify-content-between" >
      {todo}
      <FaRegTimesCircle onClick={onDelete} style={{ cursor: 'pointer' }} />
      </div>
  );
};

export default ToDoComponent;