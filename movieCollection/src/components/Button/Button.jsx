import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="ui-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
