import styles from "../scss/LandingCarousal.module.scss";

const LandingCarousal = (props) => {
  const images = props.images;
  const index = props.index;

  return (
    <div>
      {images.map((image, i) => {
        return (
          <div
            key={image.title}
            style={{
              background: `url(/images/${image.name})`,
            }}
            className={i === index ? styles.carousal : styles.carousal_hidden}
          ></div>
        );
      })}
    </div>
  );
};

export default LandingCarousal;
