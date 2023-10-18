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
            ref={(element) => (refs.current['inp'] = element)}
            className={styles['input']}
          />
        </div>
      )}
      {buttonText && (
        <Button
          text={buttonText}
          onClick={onClick}
          ref={(element) => (refs.current['btn'] = element)}
        />
      )}
    </div>
  );
});

export default InputBox;
