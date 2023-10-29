import { useRef, useState } from 'react';
//import { useContext } from 'react';
import HTag from '../HTag/';
import InputBox from '../InputBox/';
import Paragraph from '../Paragraph/';
//import { AppContext } from '../../context/app.context';
import { useLogin } from '../../hooks/useLogin.hook';

const AuthForm = () => {
  const [inputValue, setInputValue] = useState('');
  //const { userName, login, logout } = useContext(AppContext);
  const [userName, setUser] = useLogin();

  const inputRefs = useRef({});

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    if (inputValue) {
      setUser(inputValue);
      setInputValue('');
    }
  };

  const handleLogout = () => {
    setInputValue('');
    setUser(false);
  };

  return (
    <div className="header-section">
      <HTag text={userName ?? 'Вход'} />
      <Paragraph></Paragraph>
      <InputBox
        name="login"
        ref={inputRefs}
        value={inputValue}
        onChange={inputOnChange}
        hideInput={!!userName}
        buttonText={userName ? 'Выйти' : 'Войти в профиль'}
        onClick={userName ? handleLogout : handleLogin}
        placeholder="Ваше имя"
      />
    </div>
  );
};

export default AuthForm;
