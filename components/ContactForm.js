import styles from "../scss/ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div>
      <h2 style={{marginBottom: "1rem"}}>Get in touch</h2>
      <form action="" className={styles.contactForm}>
        <input type="text" name="name" placeholder="Name" />
        <input type="eamil" name="email" placeholder="E-mail" />
        <input type="text" name="purpose" placeholder="Purpose" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea type="text" name="message" placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
