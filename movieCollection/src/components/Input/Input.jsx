import styles from './Input.module.css';

const Input = ({ type = 'text', value, setValue, icon, placeholder }) => {
  return (
    <div className={styles['input-wrapper']}>
      {icon && <img className={styles['icon']} src={icon} alt="icon" />}
      <input
        type={type}
        className={styles['input']}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
