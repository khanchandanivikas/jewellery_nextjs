import styles from "../scss/Social.module.scss";

const Social = () => {
  return (
    <div className={styles.socialIcons}>
      <ul className={styles.socialIcons_list}>
        <li className={styles.socialIcons_list_link}>
          <a href="facebook.com">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li className={styles.socialIcons_list_link}>
          <a href="instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className={styles.socialIcons_list_link}>
          <a href="twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
