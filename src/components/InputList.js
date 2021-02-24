import React from 'react';
import ItemFilter from './ItemFilter';
import './item-filter.css';

const InputList = () => {
  return (
    <div className="input__wrapper">
      <div>
      <label htmlFor="input__id"></label>
      <input className="input__form" type="text" placeholder="Найти нужное" />
       </div>
      <div>
        <ItemFilter />
      </div>
    </div>
  );
};
export default InputList;
