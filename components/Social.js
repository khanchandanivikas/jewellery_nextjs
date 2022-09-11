import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "../scss/Social.module.scss";

const Social = () => {
  return (
    <ul
      className={styles.socialIcons}
    >
      <Link href="www.facebook.com">
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
      </Link>
      <Link href="instagram.com">
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </Link>
      <Link href="twitter.com">
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </Link>
    </ul>
  );
};

export default Social;
