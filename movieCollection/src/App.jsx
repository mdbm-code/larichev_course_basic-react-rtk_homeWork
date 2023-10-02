import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import InputBox from './components/InputBox/InputBox';
import AppBar from './components/AppBar/AppBar';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleClickButton = () => {
    console.log('entered', inputValue);
  };

  return (
    <div className="app">
      <AppBar />
      <div className="header-section">
        <Header text="Поиск" />
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
        <InputBox
          value={inputValue}
          setValue={setInputValue}
          icon="/search-normal.svg"
          text="Искать"
          onClick={handleClickButton}
        />
      </div>
    </div>
  );
};

export default App;
