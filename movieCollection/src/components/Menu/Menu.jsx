import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

const Menu = ({ children }) => {
  return (
    <ul className="menu-list">
      {children.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Menu;
