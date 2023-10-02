import Badge from '../Badge/Badge';
import './MenuItem.css';

const MenuItem = ({ count, onClick, text, className, icon }) => {
  const cl = `menu-item ${count && ' menu-item-with-badge'}${
    className && ' ' + className
  }`;
  return (
    <a className="menu-link" href="#">
      <div className={cl} onClick={onClick}>
        {text}
        {count && <Badge value={count} />}
        {icon && <img src={icon} alt="icon" />}
      </div>
    </a>
  );
};

export default MenuItem;