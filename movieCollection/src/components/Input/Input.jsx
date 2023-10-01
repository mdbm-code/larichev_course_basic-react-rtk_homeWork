import './Input.css';

const Input = ({ value, setValue, icon }) => {
  return (
    <div className="input-wrapper">
      {icon && <img className="icon" src={icon} alt="icon" />}
      <input
        className="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
