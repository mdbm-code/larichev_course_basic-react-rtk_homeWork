import MenuItem from '../MenuItem/MenuItem';
import styles from './Menu.module.css';

const Menu = ({ children }) => {
  return (
    <ul className={styles['menu-list']}>
      {children.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Menu;
