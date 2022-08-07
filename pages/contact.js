import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import Map from '../components/Map';
import styles from "../scss/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <ContactForm />
        <ContactDetails />
        <Map />
    </div>
  )
}

export default Contact