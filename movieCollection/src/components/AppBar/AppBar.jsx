import { useContext, useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import styles from './AppBar.module.css';
import { AppContext } from '../../context/app.context';

const AppBar = () => {
  const { menuUpdated, getMenu } = useContext(AppContext);
  const [menu, setMenu] = useState([]);

  //menuUpdated - булевый флаг, который переводится в состояние true в случае:
  //1. Выход пользователя
  //2. Вход пользователя
  //3. Пользователь добавил фильм в избранное
  //4. Пользователь убрал фильм из избранного
  useEffect(() => {
    setMenu(getMenu());
  }, [menuUpdated, setMenu, getMenu]);

  return (
    <div className={styles['app-bar']}>
      <div className={styles['app-bar-inner']}>
        <div className={styles['logo']}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <Menu>{menu}</Menu>
      </div>
    </div>
  );
};

export default AppBar;
