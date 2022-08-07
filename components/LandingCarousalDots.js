import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/LandingCarousalDots.module.scss";

const LandingCarousalDots = () => {
  return (
    <div className={styles.landingCarousal_dots}>
      <FontAwesomeIcon icon={faCircle} />
      <FontAwesomeIcon icon={faCircle} />
      <FontAwesomeIcon icon={faCircle} />
    </div>
  );
};

export default LandingCarousalDots;
