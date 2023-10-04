import Menu from '../Menu/Menu';
import styles from './AppBar.module.css';

const AppBar = () => {
  const minuItems = [
    { id: 1, text: 'Поиск фильмов' },
    { id: 2, text: 'Мои фильмы', count: 53 },
    { id: 3, className: 'profile', text: 'Войти', icon: '/login.svg' }
  ];

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
