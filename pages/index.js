import { useState, useEffect } from "react";
import styles from "../scss/Landing.module.scss";
import LandingContent from "../components/LandingContent";
import LandingCarousal from "../components/LandingCarousal";
import LandingSlider from "../components/LandingSlider";

export default function Home() {
  const images = [
    {
      name: "landing-slider.jpg",
      number: "1",
      title: "Bright Side Collection",
    },
    {
      name: "landing-carousal.jpg",
      number: "2",
      title: "Dark Side Collection",
    },
  ];
  const [index, setIndex] = useState(0);

  const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleClickprev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // useEffect(() => {
  //   const handleAutoplay = setInterval(handleClicknext, 5000);
  //   return () => clearInterval(handleAutoplay);
  // }, [handleClicknext]);

  return (
    <div className={styles.landingContainer}>
      <LandingContent />
      <LandingCarousal images={images} index={index} />
      <LandingSlider
        images={images}
        index={index}
        handleClicknext={handleClicknext}
        handleClickprev={handleClickprev}
      />
    </div>
  );
}
