import styles from "../scss/LandingContent.module.scss";

const LandingContent = () => {
  return (
    <section className={styles.landingContent}>
      <h1 className={styles.landingContent_heading}>
        Designer Casual <br /> Collection
      </h1>
      <p className={styles.landingContent_text}>
        Nothing adds a note of glamour to your ensemble like our own luxury
        jewellery; laden with precious diamonds, sapphires and esmeralds in gold
        of an exceptional quality
      </p>
      <button className={styles.landingContent_btn}>Shop now</button>
    </section>
  );
};

export default LandingContent;
