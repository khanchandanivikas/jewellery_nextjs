import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "./Loader";

const RegisterForm = () => {
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
      console.log(response.user);
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name: state.name,
        email: state.email,
        telephone: state.telephone,
        state: state.state,
        address: state.address,
        auth: "email"
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
    </form>
  );
};

export default RegisterForm;
