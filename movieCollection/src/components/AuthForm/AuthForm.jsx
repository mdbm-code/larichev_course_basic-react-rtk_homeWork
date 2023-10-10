import { useContext, useEffect, useRef, useState } from 'react';
import HTag from '../HTag/HTag';
import InputBox from '../InputBox/InputBox';
import Paragraph from '../Paragraph/Paragraph';
import { UserContext } from '../../context/user.context';

const AuthForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { currentUserName, login, logout, focusLoginInput } =
    useContext(UserContext);

  const inputRef = useRef();

  useEffect(() => {
    //при нажатии в меню шапки кнопки Войти значение focusLoginInput === true
    if (focusLoginInput) {
      inputRef.current?.focus();
    }
  }, [focusLoginInput, inputRef]);

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    if (inputValue) {
      login(inputValue);
      setInputValue('');
    }
  };

  const handleLogout = () => {
    setInputValue('');
    logout();
  };

  return (
    <div className="header-section">
      <HTag text={currentUserName ? currentUserName : 'Вход'} />
      <Paragraph></Paragraph>
      <InputBox
        value={inputValue}
        onChange={inputOnChange}
        buttonText={currentUserName ? 'Выйти' : 'Войти в профиль'}
        onClick={currentUserName ? handleLogout : handleLogin}
        placeholder="Ваше имя"
        ref={{ inputRef }}
        hideInput={currentUserName ? true : false}
      />
    </div>
  );
};

export default AuthForm;
