import Button from "./Button";
import styles from "../scss/landing/LandingContent.module.scss";

const LandingContent = () => {
  return (
    <section className={styles.landingContent}>
      <h1>
        Designer Casual <br /> Collection
      </h1>
      <p>
        Nothing adds a note of glamour to your ensemble like our own luxury
        jewellery; laden with precious diamonds, sapphires and esmeralds in gold
        of an exceptional quality
      </p>
      <Button text="Shop now" />
    </section>
  );
};

export default LandingContent;
