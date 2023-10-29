import styles from './HTag.module.css';

const HTag = ({ text }) => {
  return <h1 className={styles['ui-header']}>{text}</h1>;
};

export default HTag;
