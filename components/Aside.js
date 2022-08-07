import Social from "./Social";
import LandingCarousalDots from "./LandingCarousalDots";
import styles from "../scss/Aside.module.scss";

const Aside = () => {
  return (
    <aside className={styles.sidebar}>
      <div></div>
      <LandingCarousalDots />
      <Social />
    </aside>
  );
};

export default Aside;
