import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../scss/landing/LandingSlider.module.scss";

const LandingSlider = (props) => {
  const images = props.images;
  const index = props.index;
  const handleClicknext = props.handleClicknext;
  const handleClickprev = props.handleClickprev;

  return (
    <div className={styles.landingSlider}>
      {images.map((image, i) => {
        return (
          <div
            key={image.title}
            className={i === index ? styles.content : styles.content_hidden}
          >
            <Image
              src={`/images/${image.name}`}
              alt={image.title}
              width={200}
              height={200}
            />

            <div className={styles.text}>
              <h4>{image.number}</h4>
              <h4 className={styles.heading}>{image.title}</h4>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        );
      })}
      <div className={styles.arrows}>
        <button onClick={handleClickprev}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
        <button onClick={handleClicknext}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
};

export default LandingSlider;
