import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { addUser } from "../store/reducers/authReducers";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "./Loader";

const RegisterForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  let initialState = {
    name: "",
    email: "",
    password: "",
    telephone: "",
    state: "",
    address: "",
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
      const response = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      await sendEmailVerification(auth.currentUser);
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name: state.name,
        email: state.email,
        telephone: state.telephone,
        state: state.state,
        address: state.address,
        auth: "email",
      });
      setIsLoading(false);
      dispatch(
        addUser({
          id: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          token: response.user.accessToken,
        })
      );
      router.push("/");
      toast.success("Account created Successfully");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Internal error. Please try again later");
    }
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} method="post" className={styles.form}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
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
      <Input
        type="tel"
        name="telephone"
        placeholder="Telephone"
        value={state.telephone}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="state"
        placeholder="State"
        value={state.state}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="address"
        placeholder="Address"
        value={state.address}
        onChange={handleChange}
      />
      <Button type="submit" text={isLoading ? <Loader /> : "Register"} />
      <Toaster />
    </form>
  );
};

export default RegisterForm;
