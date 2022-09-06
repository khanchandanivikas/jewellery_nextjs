import styles from "../scss/LandingCarousal.module.scss";

const LandingCarousal = ({ images, index, url }) => {
  return (
    <div>
      {images.map((image, i) => {
        return (
          <div
            key={image.name}
            style={{
              background: `url(/images${url ? "/" + url : ""}/${image.name})`,
            }}
            className={i === index ? styles.carousal : styles.carousal_hidden}
          ></div>
        );
      })}
    </div>
  );
};

export default LandingCarousal;
