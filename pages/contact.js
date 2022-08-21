import styles from "../scss/Contact.module.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}
      >
        <ContactForm />
      </GoogleReCaptchaProvider>
      <ContactDetails />
      <Map />
    </div>
  );
};

export default Contact;
