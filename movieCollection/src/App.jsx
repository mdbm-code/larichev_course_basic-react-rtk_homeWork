import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import InputBox from './components/InputBox/InputBox';
import AppBar from './components/AppBar/AppBar';
import CalalogList from './components/CalalogList/CalalogList';

const INITIAL_STATE = [
  {
    id: 1,
    title: 'Black Widow',
    rating: 324,
    image: '/images/fakeData/blackWidow.jpg',
    favorite: 1
  },
  {
    id: 2,
    title: 'Shang Chi',
    rating: 124,
    image: '/images/fakeData/ShangChi.jpg',
    favorite: 0
  },
  {
    id: 3,
    title: 'Loki',
    rating: 235,
    image: '/images/fakeData/Loki.jpg',
    favorite: 0
  },
  {
    id: 4,
    title: 'How I Met Your Mother',
    rating: 123,
    image: '/images/fakeData/HowIMetYourMother.jpg',
    favorite: 0
  },
  {
    id: 5,
    title: 'Money Heist',
    rating: 8125,
    image: '/images/fakeData/MoneyHeist.jpg',
    favorite: 0
  },
  {
    id: 6,
    title: 'Friends',
    rating: 123,
    image: '/images/fakeData/Friends.jpg',
    favorite: 0
  },
  {
    id: 7,
    title: 'The Big Bang Theory',
    rating: 12,
    image: '/images/fakeData/TheBigBangTheory.jpg',
    favorite: 0
  },
  {
    id: 8,
    title: 'Two And a Half Men',
    rating: 456,
    image: '/images/fakeData/TwoAndaHalfMen.jpg',
    favorite: 0
  }
];

const App = () => {
  const [inputValue, setInputValue] = useState('');
  //eslint-disable-next-line
  const [data, setData] = useState(INITIAL_STATE);

  const handleClickButton = () => {
    console.log('search', inputValue);
  };

  const toggleFavorite = (itemId) => {
    console.log('change favorite flag for', itemId);
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
      <div className="content-section">
        <CalalogList data={data} toggleFavorite={toggleFavorite} />
      </div>
    </div>
  );
};

export default App;
