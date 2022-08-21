import styles from "../scss/Login.module.scss";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  return (
    <div className={styles.forms}>
      <div className={styles.formContainer}>
        <h2>Login to your account</h2>
        <p>Welcome again! Continue with your account.</p>
        <div>
          <p>Continue with google</p>
          <p>Or</p>
        </div>
        <LoginForm />
      </div>
      <div className={styles.formContainer}>
        <h2>Register</h2>
        <p>Create a new account today</p>
        <div>
          <p>Continue with google</p>
          <p>Or</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
