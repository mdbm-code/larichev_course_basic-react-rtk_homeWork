import styles from './Paragraph.module.css';

const Paragraph = ({ children }) => {
  return <p className={styles['ui-p']}>{children}</p>;
};

export default Paragraph;
