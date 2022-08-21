import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginForm = () => {
  return (
    <form action="" className={styles.form}>
      <Input type="email" name="email" placeholder="E-mail" />
      <Input type="password" name="password" placeholder="Password" />
      <Button text="Login" />
    </form>
  );
};

export default LoginForm;
