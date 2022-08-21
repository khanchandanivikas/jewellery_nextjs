import styles from "../scss/ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.contact_heading}>Contact Us</h3>
      <div className={styles.contact_info}>
        <p>hello@cartier.com</p>
        <p>(022) 667-795-090</p>
        <p>687 av. De Tunte</p>
        <p>Las Palmas</p>
      </div>
    </div>
  );
};

export default ContactDetails;
