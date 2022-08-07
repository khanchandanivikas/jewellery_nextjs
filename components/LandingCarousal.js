import styles from "../scss/LandingCarousal.module.scss";

const LandingCarousal = (props) => {
  const images = props.images;
  const index = props.index;

  return (
    <div
      style={{
        background: `url(${
          index === 0 ? images[index + 1].src : images[index - 1].src
        })`,
      }}
      className={styles.carousal}
    ></div>
  );
};

export default LandingCarousal;
