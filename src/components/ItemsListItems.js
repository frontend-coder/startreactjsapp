import React from 'react';
import './items-list-items.css';
const ItemsListItems = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };
  return (
    <span className="todo-list-item">
      <span className="items-list-items" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default ItemsListItems;
