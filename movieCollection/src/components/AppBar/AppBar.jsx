import Menu from '../Menu/Menu';
import './AppBar.css';

const AppBar = () => {
  const minuItems = [
    { id: 1, text: 'Поиск фильмов' },
    { id: 2, text: 'Мои фильмы', count: 53 },
    { id: 3, className: 'profile', text: 'Войти', icon: '/login.svg' }
  ];

  return (
    <div className="app-bar">
      <div className="app-bar-inner">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <Menu>{minuItems}</Menu>
      </div>
    </div>
  );
};

export default AppBar;
