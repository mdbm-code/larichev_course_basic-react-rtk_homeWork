import Button from '../Button/Button';
import Input from '../Input/Input';
import './InputBox.css';

const InputBox = ({
  inputValue,
  setValue,
  icon,
  text,
  onClick,
  placeholder = 'Введите название'
}) => {
  return (
    <div className="input-box">
      <Input
        value={inputValue}
        setValue={setValue}
        icon={icon}
        placeholder={placeholder}
      />
      <Button text={text} onClick={onClick} />
    </div>
  );
};

export default InputBox;
