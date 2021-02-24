import React from 'react';
import ItemsListItems from './ItemsListItems';
import './itemslist.css';

const ItemsList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProp } = item;
    return (
      <li key={id} className="list-group-item">
        {/* <ItemsListItems label={item.label} important={item.important} />
         */}

        <ItemsListItems {...itemProp} />
      </li>
    );
  });

  return (
    <div>
      <ul className="list-group todo-list">{elements}</ul>
    </div>
  );
};
export default ItemsList;
