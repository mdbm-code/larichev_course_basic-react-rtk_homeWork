import Menu from '../Menu/Menu';
import './AppBar.css';

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-inner">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default AppBar;
