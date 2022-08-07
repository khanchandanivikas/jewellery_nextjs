import { useState, useEffect } from "react";
import styles from "../scss/Landing.module.scss";
import LandingContent from "../components/LandingContent";
import LandingCarousal from "../components/LandingCarousal";
import LandingSlider from "../components/LandingSlider";
import Aside from "../components/Aside";
import slider1 from "../images/landing-slider.jpg";
import slider2 from "../images/landing-carousal.jpg";

export default function Home() {
  const images = [slider1, slider2];
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const handleAutoplay = setInterval(handleClicknext, 5000);
    return () => clearInterval(handleAutoplay);
  }, [handleClicknext]);

  return (
    <div>
      <div className={styles.landingContainer}>
        <LandingContent />
        <LandingCarousal images={images} index={index} />
        <LandingSlider
          images={images}
          index={index}
          handleClicknext={handleClicknext}
        />
      </div>
      <Aside />
    </div>
  );
}
