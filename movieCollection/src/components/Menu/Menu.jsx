import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-list">
      <MenuItem text="Поиск фильмов" />
      <MenuItem text="Мои фильмы" count={53} />
      <MenuItem className="profile" text="Войти" icon="/login.svg" />
    </div>
  );
};

export default Menu;
