import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ name, text, onClick }, ref) {
  return (
    <button
      name={name}
      ref={ref}
      className={styles['ui-btn']}
      onClick={onClick}
    >
      {text}
    </button>
  );
});

export default Button;
