import { useRef, useState } from 'react';
import HTag from '../HTag/';
import InputBox from '../InputBox/';
import Paragraph from '../Paragraph/';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const inputRefs = useRef({});

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    //тестовая установка фокуса
    //inputRefs.current['search'].focus();
  };

  return (
    <div className={'header-section'}>
      <HTag text="Поиск" />
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <InputBox
        name="search"
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
