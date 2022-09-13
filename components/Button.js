import { useRouter } from "next/router";
import styles from "../scss/Button.module.scss";

const Button = ({ text, onClick, type, url }) => {
  const router = useRouter();
  const changeRoute = (url) => {
    router.push(url);
  };
  return (
    <button
      type={type}
      onClick={!url ? onClick : () => changeRoute(url)}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

export default Button;
