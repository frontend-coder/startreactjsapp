import React from 'react';
import './App.css';
import HeaderList from './components/HeaderList';
import InputList from './components/InputList';
 import ItemsList from './components/ItemsList';

const App = () => {
  const todoData = [
    { id: 1, label: 'Изучить Reactjs', important: true },
    { id: 2, label: 'Построить ToDo приложение', important: false },
    { id: 3, label: 'Построить Landing Page', important: true },
    { id: 4, label: 'Построить систему навигации по Landing Page', important: true },
    { id: 5, label: 'Построить всплывающее окно с ФОС', important: false },
    { id: 6, label: 'Построить систему валидации ФОС', important: true },
    { id: 7, label: 'Построить ToDo приложение', important: true },
    { id: 8, label: 'Построить галерею ихображений', important: false },
    { id: 9, label: 'Построить слайдер контента', important: true },
    { id: 10, label: 'Настроить связь с базой Firebase', important: true },
    { id: 11, label: 'Не офигеть от информации', important: true },
  ];

  const isLoginIn = false;
  const loginBox = <span>Логин </span>;
  return (
    <div className = "App" >
      <header className="App-header" >
        <div className="container">
    { isLoginIn ? null : loginBox }
     <HeaderList />
  <InputList />
          <ItemsList todos={todoData} />
          </div>
    </header>
    </div>
  );
};

export default App;
