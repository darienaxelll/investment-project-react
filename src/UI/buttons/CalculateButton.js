import styles from './CalculateButton.module.css';

const CalculateButton = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default CalculateButton;