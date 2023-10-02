import './Input.css';

const Input = ({ value, setValue, icon, placeholder }) => {
  return (
    <div className="input-wrapper">
      {icon && <img className="icon" src={icon} alt="icon" />}
      <input
        className="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
