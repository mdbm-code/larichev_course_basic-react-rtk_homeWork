import { forwardRef } from 'react';
import Button from '../Button/Button';
import styles from './InputBox.module.css';

const InputBox = forwardRef(function InputBox(
  { hideInput, icon, buttonText, onClick = () => {}, ...props },
  refs
) {
  return (
    <div className={styles['input-box']}>
      {!hideInput && (
        <div className={styles['input-wrapper']}>
          {icon && <img className={styles['icon']} src={icon} alt="icon" />}
          <input
            {...props}
            ref={(el) => (refs.current[el?.name] = el)}
            className={styles['input']}
          />
        </div>
      )}
      {buttonText && (
        <Button
          name="btn"
          text={buttonText}
          onClick={onClick}
          ref={(el) => (refs.current[el?.name] = el)}
        />
      )}
    </div>
  );
});

export default InputBox;
