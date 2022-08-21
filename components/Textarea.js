import styles from "../scss/Textarea.module.scss";

const Textarea = ({ type, name, placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles.textarea}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
