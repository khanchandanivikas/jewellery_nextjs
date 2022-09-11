import styles from "../scss/carousal/Carousal.module.scss";

const Carousal = ({ images, index, url }) => {
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

export default Carousal;
