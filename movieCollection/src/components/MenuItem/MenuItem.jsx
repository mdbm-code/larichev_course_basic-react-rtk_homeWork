import Badge from '../Badge/Badge';
import classNames from 'classnames';
import './MenuItem.css';

const MenuItem = ({ count, onClick, text, className, icon }) => {
  var liClass = classNames('menu-item', {
    'menu-item-with-badge': !!count,
    [className]: !!className
  });

  return (
    <li className={liClass} onClick={onClick}>
      <a href="#">
        {text}
        {count && <Badge value={count} />}
        {icon && <img src={icon} alt="icon" />}
      </a>
    </li>
  );
};

export default MenuItem;
