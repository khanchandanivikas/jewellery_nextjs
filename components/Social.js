import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "../scss/Social.module.scss";

const Social = ({ flexCol }) => {
  return (
    // <div
    //   className={
    //     !flexCol ? styles.socialIcons : `${styles.socialIcons} ${styles.flexCol}`
    //   }
    // >
      <ul
        className={
          !flexCol ? styles.socialIcons : `${styles.socialIcons} ${styles.flexCol}`
        }
      >
        <Link href="www.facebook.com">
          <li className={styles.socialIcons_link}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </Link>
        <Link href="instagram.com">
          <li className={styles.socialIcons_link}>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </Link>
        <Link href="twitter.com">
          <li className={styles.socialIcons_link}>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </Link>
      </ul>
    //  </div>
  );
};

export default Social;
