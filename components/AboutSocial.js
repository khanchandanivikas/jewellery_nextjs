import React from "react";
import styles from "../scss/AboutSocial.module.scss";
import Social from "../components/Social";

const AboutSocial = () => {
  return (
    <div className={styles.followUs}>
      <h3>Follow Us</h3>
      <Social />
    </div>
  );
};

export default AboutSocial;
