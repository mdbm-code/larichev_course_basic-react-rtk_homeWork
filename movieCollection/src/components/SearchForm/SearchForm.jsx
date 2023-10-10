import { useRef, useState } from 'react';
import HTag from '../HTag/HTag';
import InputBox from '../InputBox/InputBox';
import Paragraph from '../Paragraph/Paragraph';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();
  const buttonRef = useRef();
  //тренировка передачи в дочерний компонент одновременно двух рефов
  const refsObject = {
    inputRef,
    buttonRef
  };

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    console.log('search', inputValue);
    //тестовая установка фокуса
    inputRef.current.focus();
  };

  return (
    <div className={'header-section'}>
      <HTag text="Поиск" />
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <InputBox
        ref={refsObject}
        value={inputValue}
        onChange={inputOnChange}
        icon="/search-normal.svg"
        buttonText="Искать"
        onClick={handleClickButton}
        placeholder="Название фильма"
      />
    </div>
  );
};

export default SearchForm;
