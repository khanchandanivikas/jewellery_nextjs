import styles from "../scss/Input.module.scss";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
