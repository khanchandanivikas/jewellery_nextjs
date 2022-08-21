import React, { useEffect, useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../scss/Form.module.scss";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "./Button";
import Loader from "../components/Loader";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [state, setState] = useState({
    name: "",
    email: "",
    telephone: "",
    purpose: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await handleReCaptchaVerify();
    if (token) {
      try {
        setIsLoading(true);
        const { data } = await axios.post("/api/contact", {
          ...state,
          token,
        });
        setIsLoading(false);
        console.log(data);
        if (data.status === "success") {
          setState({
            name: "",
            email: "",
            telephone: "",
            purpose: "",
            subject: "",
            message: "",
          });
          toast.success(
            "We have received your e-mail successfully. We will contact you shortly."
          );
        }
      } catch (error) {
        console.log(error);
        toast.error("Message could not be sent. Please try again later.");
        setIsLoading(false);
      }
    } else {
      console.log("No hay token");
    }
  };

  //Google Recaptcha
  const handleReCaptchaVerify = useCallback(async () => {
    if (executeRecaptcha) {
      return await executeRecaptcha();
    } else {
      return;
    }
  }, [executeRecaptcha]);
  useEffect(() => handleReCaptchaVerify, [handleReCaptchaVerify]);

  return (
    <div>
      <h2>Get in touch</h2>
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
          type="tel"
          name="telephone"
          placeholder="Telephone"
          value={state.telephone}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={state.purpose}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={state.subject}
          onChange={handleChange}
        />
        <Textarea
          type="text"
          name="message"
          placeholder="Message"
          value={state.message}
          onChange={handleChange}
        />
        <Button type="submit" text={isLoading ? <Loader /> : "Send"} />
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
