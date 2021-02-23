import React from 'react';
import './App.css';
import HeaderList from './components/HeaderList';
import InputList from './components/InputList';
import ItemsList from './components/ItemsList';

const App = () => {
  const isLoginIn = false;
  const loginBox = <span>Логин </span>;
  return (
    <div className = "App" >
    <header className = "App-header" >
    { isLoginIn ? null : loginBox }
        <HeaderList />
    <InputList />
    <ItemsList />
    </header>
    </div>
  );
};

export default App;
