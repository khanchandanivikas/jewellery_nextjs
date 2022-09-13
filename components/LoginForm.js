import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { addUser } from "../store/reducers/authReducers";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import toast, { Toaster } from "react-hot-toast";
import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "./Loader";

const LoginForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  let initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      dispatch(addUser({
        id: response.user.uid,
        name: response.user.displayName,
        email: response.user.email,
        token: response.user.accessToken
      }));
      setIsLoading(false);
      router.push('/');
      toast.success("Authentication successful");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Authentication error. Please check the datas");
    }
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} method="post" className={styles.form}>
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        value={state.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="off"
        value={state.password}
        onChange={handleChange}
      />
      <Button type="submit" text={isLoading ? <Loader /> : "Login"} />
      <Toaster />
    </form>
  );
};

export default LoginForm;
