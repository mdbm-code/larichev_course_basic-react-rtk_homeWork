import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';

const App = () => {
  return (
    <>
      <Header text="Поиск" />
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Button text="Искать" />
    </>
  );
};

export default App;
