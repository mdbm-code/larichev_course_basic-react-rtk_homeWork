import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './InputBox.module.css';

const InputBox = ({
  inputValue,
  setValue,
  icon,
  text,
  onClick,
  placeholder = 'Введите название'
}) => {
  return (
    <div className={styles['input-box']}>
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
