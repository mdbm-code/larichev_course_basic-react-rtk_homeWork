import { useRef, useState } from 'react';
import HTag from '../HTag/HTag';
import InputBox from '../InputBox/InputBox';
import Paragraph from '../Paragraph/Paragraph';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const inputRefs = useRef({});

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = (key) => {
    console.log('key', key);
    //тестовая установка фокуса
    inputRefs.current[key].focus();
  };

  return (
    <div className={'header-section'}>
      <HTag text="Поиск" />
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <InputBox
        ref={inputRefs}
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
