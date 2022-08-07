import styles from "../scss/ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.contact_heading}>Contact Us</h3>
      <div className={styles.contact_info}>
        <p className={styles.contact_info_text}>hello@cartier.com</p>
        <p className={styles.contact_info_text}>(022) 667-795-090</p>
        <p className={styles.contact_info_text}>687 av. De Tunte</p>
        <p className={styles.contact_info_text}>Las Palmas</p>
      </div>
    </div>
  );
};

export default ContactDetails;
