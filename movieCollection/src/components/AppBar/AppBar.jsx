import { useContext } from 'react';
import Menu from '../Menu/Menu';
import styles from './AppBar.module.css';
import { UserContext } from '../../context/user.context';

const AppBar = () => {
  const { currentUserName, users, logout, setFocusLoginInput } =
    useContext(UserContext);

  let currentUser = undefined;
  if (currentUserName && users) {
    //здесь нужен объект текущего пользователя
    //для того чтобы получить список его избранного
    currentUser = users.find((user) => user.name === currentUserName);
  }

  //генерируем пункты меню
  let minuItems = [{ id: 1, text: 'Поиск фильмов' }];
  if (currentUser) {
    //если есть авторизованный пользователь
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
      icon: '/login.svg',
      onClick: () => setFocusLoginInput(true)
    });
  }

  return (
    <div className={styles['app-bar']}>
      <div className={styles['app-bar-inner']}>
        <div className={styles['logo']}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <Menu>{minuItems}</Menu>
      </div>
    </div>
  );
};

export default AppBar;
