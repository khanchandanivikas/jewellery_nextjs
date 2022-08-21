import Social from "./Social";
import LandingCarousalDots from "./LandingCarousalDots";
import styles from "../scss/Aside.module.scss";

const Aside = ({ images, index, setIndex }) => {
  return (
    <aside className={styles.sidebar}>
      <div></div>
      <LandingCarousalDots images={images} index={index} setIndex={setIndex} />
      <Social flexCol />
    </aside>
  );
};

export default Aside;
