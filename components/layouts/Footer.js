import styles from "../../scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.myFooter}>
      <p className={styles.myFooter_text}>
        All Rights Reserved Cartier <i className="fa-solid fa-copyright"></i>
      </p>
    </footer>
  );
};

export default Footer;
