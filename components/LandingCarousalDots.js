import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/LandingCarousalDots.module.scss";
import { useEffect } from "react";

const LandingCarousalDots = ({ images, index, setIndex }) => {
  const renderPagination = () => {
    let res = [];
    for (let i = 0; i <= images.length - 1; i++) {
      res.push(
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={i === index ? styles.dotActive : styles.dotInactive}
        >
          <FontAwesomeIcon icon={faCircle} />
        </button>
      );
    }
    console.log(res);
    return res;
  };

  return (
    <div className={styles.landingCarousal_dots}>{renderPagination()}</div>
  );
};

export default LandingCarousalDots;
