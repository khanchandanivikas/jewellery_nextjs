import React from "react";
import styles from "../scss/AboutSocial.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const AboutSocial = () => {
  return (
    <div className={styles.followUs}>
      <div className={styles.followUs_social}>
        <h3>Follow Us</h3>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </div>
  );
};

export default AboutSocial;
