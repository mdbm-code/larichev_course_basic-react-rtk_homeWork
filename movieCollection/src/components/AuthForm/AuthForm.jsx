import { useContext, useRef, useState } from 'react';
import HTag from '../HTag/HTag';
import InputBox from '../InputBox/InputBox';
import Paragraph from '../Paragraph/Paragraph';
import { AppContext } from '../../context/app.context';

const AuthForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { userName, login, logout } = useContext(AppContext);

  const inputRefs = useRef({});

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
      <HTag text={userName ? userName : 'Вход'} />
      <Paragraph></Paragraph>
      <InputBox
        value={inputValue}
        onChange={inputOnChange}
        buttonText={userName ? 'Выйти' : 'Войти в профиль'}
        onClick={userName ? handleLogout : handleLogin}
        placeholder="Ваше имя"
        ref={inputRefs}
        hideInput={userName ? true : false}
      />
    </div>
  );
};

export default AuthForm;
