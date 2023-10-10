import { createContext, useEffect, useReducer, useState } from 'react';
import { USERS_INITIAL_STATE, usersReducer } from '../store/usersReducer';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [users, dispatchUser] = useReducer(usersReducer, USERS_INITIAL_STATE);

  //на верхней панели меню, при нажатии Войти, выполняем setFocusLoginInput(true)
  //в компоненте LoginForm через useEffect проверяем значение focusLoginInput
  //и если оно === true, тогда ref.current.focus() через устанавливаем фокус на поле ввода имени
  const [focusLoginInput, setFocusLoginInput] = useState(false);

  //храню в стейте имя пользователя потому что в этом проекте оно является идентификатором
  const [currentUserName, setCurrentUserName] = useState('');

  //при обновлении страницы или списка пользователей
  //смотрим нет ли авторизованного пользователя
  useEffect(() => {
    let name = '';
    if (users.length) {
      name = users.find((user) => user.isLogined)?.name || '';
    }
    setCurrentUserName(name);
  }, [users]);

  //авторизация пользователя по имени
  //если не найден, то создаём нового
  const login = (name) => {
    if (name) {
      dispatchUser({ type: 'LOGIN', payload: name });
      setCurrentUserName(name);
    }
  };

  const logout = () => {
    dispatchUser({ type: 'LOGOUT' });
    setCurrentUserName('');
  };

  return (
    <UserContext.Provider
      value={{
        currentUserName,
        users,
        focusLoginInput,
        setFocusLoginInput,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
