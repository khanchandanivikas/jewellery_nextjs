import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../scss/LandingSlider.module.scss";

const LandingSlider = (props) => {
  const images = props.images;
  const index = props.index;
  const handleClicknext = props.handleClicknext;

  return (
    <div className={styles.landingSlider}>
      <div className={styles.landingSlider_content}>
        <Image
          src={images[index].src}
          alt="slider_image"
          width={200}
          height={200}
          className={styles.landingSlider_content_image}
        />
        <div className={styles.landingSlider_content_text}>
          <h4>{index === 0 ? 1 : 2}</h4>
          <h4 className={styles.heading}>
            {index === 0 ? "Bright Side Collection" : "Dark Side Collection"}
          </h4>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className={styles.landingSlider_arrows}>
        <button onClick={handleClicknext}>
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
