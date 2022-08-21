import styles from "../scss/Button.module.scss";

const Button = ({ text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
