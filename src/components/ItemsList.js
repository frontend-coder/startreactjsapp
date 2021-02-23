import React from 'react';

const ItemsList = () => {
  const items = [
    'Изучить Reactjs',
    'Построить ToDo приложение',
    'Построить Landing Page',
    'Построить систему навигации по Landing Page',
    'Построить всплывающее окно с ФОС',
    'Построить систему валидации ФОС',
    'Построить галерею ихображений ',
    'Построить слайдер контента',
    'Настроить связь с базой Firebase',
  ];
  return (
    <div>
      <ul>
        <li>{items[0]} </li>
        <li>{items[1]} </li>
        <li>{items[2]} </li>
        <li>{items[3]} </li>
        <li>{items[4]} </li>
        <li>{items[5]} </li>
        <li>{items[6]} </li>
        <li>{items[7]} </li>
        <li>{items[8]} </li>
      </ul>
    </div>
  );
};
export default ItemsList;
