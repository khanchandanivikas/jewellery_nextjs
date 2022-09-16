import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import styles from "../scss/Rating.module.scss";

const Rating = ({ rate = 0, max = 5 }) => {
  const roundedRate = Math.round(rate);

  return (
    <div className={styles.rating}>
      {[...new Array(roundedRate)].map((_, i) => (
        <FontAwesomeIcon className={styles.fullStar} key={i} icon={faStar} />
      ))}
      {[...new Array(max - roundedRate)].map((_, i) => (
        <FontAwesomeIcon className={styles.emptyStar} key={i} icon={faStarEmpty} />
      ))}
    </div>
  );
};

export default Rating;
