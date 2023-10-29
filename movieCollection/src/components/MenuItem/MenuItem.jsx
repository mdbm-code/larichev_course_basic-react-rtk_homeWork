import Badge from '../Badge/Badge';
import classNames from 'classnames';
import styles from './MenuItem.module.css';

const MenuItem = ({ count, onClick, text, className, icon }) => {
  var liClass = classNames(styles['menu-item'], 'menu-item', {
    [styles['menu-item-with-badge']]: !!count,
    [styles[className]]: !!className
  });

  return (
    <li className={liClass} onClick={onClick}>
      {text}
      {count !== undefined && count !== 0 && <Badge value={count} />}
      {icon && <img src={icon} alt="icon" />}
    </li>
  );
};

export default MenuItem;
