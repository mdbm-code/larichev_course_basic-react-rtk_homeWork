import './Input.css';

const Input = ({ type = 'text', value, setValue, icon, placeholder }) => {
  return (
    <div className="input-wrapper">
      {icon && <img className="icon" src={icon} alt="icon" />}
      <input
        type={type}
        className="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
