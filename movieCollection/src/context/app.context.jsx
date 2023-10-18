import { createContext, useEffect, useReducer, useState } from 'react';
import { USERS_INITIAL_STATE, usersReducer } from '../store/usersReducer';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [users, dispatchUser] = useReducer(usersReducer, USERS_INITIAL_STATE);
  const [menuUpdated, setMenuUpdated] = useState(false);

  //храню в стейте имя пользователя потому что в этом проекте оно является идентификатором
  const [userName, setCurrentUserName] = useState('');

  const getMenu = () => {
    //генерируем пункты меню
    let minuItems = [{ id: 1, text: 'Поиск фильмов' }];
    if (userName && users?.length > 0) {
      //если есть авторизованный пользователь
      const currentUser = users.find((user) => user.name === userName);

      minuItems.push({
        id: 2,
        text: 'Мои фильмы',
        count: currentUser?.favorites.length
      });
      minuItems.push({ id: 3, text: currentUser.name, icon: '/user.svg' });
      minuItems.push({
        id: 4,
        text: 'Выйти',
        onClick: () => logout()
      });
    } else {
      minuItems.push({
        id: 5,
        className: 'profile',
        text: 'Войти',
        icon: '/login.svg'
      });
    }

    return minuItems;
  };

  //при обновлении страницы или списка пользователей
  //смотрим нет ли авторизованного пользователя
  useEffect(() => {
    let name = '';
    if (users.length) {
      name = users.find((user) => user.isLogined)?.name || '';
    }
    setCurrentUserName(name);
    setMenuUpdated(true);
  }, [users]);

  //авторизация пользователя по имени
  //если не найден, то создаём нового
  const login = (name) => {
    if (name) {
      dispatchUser({ type: 'LOGIN', payload: name });
      setCurrentUserName(name);
      setMenuUpdated(true);
    }
  };

  const logout = () => {
    dispatchUser({ type: 'LOGOUT' });
    setCurrentUserName('');
    setMenuUpdated(true);
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        menuUpdated,
        getMenu,
        login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
