import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterForm = () => {
  return (
    <form action="" className={styles.form}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="E-mail" />
      <Input type="password" name="password" placeholder="Password" />
      <Input type="tel" name="phone" placeholder="Telephone" />
      <Input type="text" name="state" placeholder="State" />
      <Input type="text" name="address" placeholder="Address" />
      <Button text="Register" />
    </form>
  );
};

export default RegisterForm;
