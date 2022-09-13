import styles from "../scss/about/AboutMission.module.scss";

const AboutMission = () => {
  return (
    <div className={styles.mission}>
      <h2>Our Mission</h2>
      <p className={styles.text}>
        We believe in jewelry as an expression of self: that it can mean
        whatever you want; that you can wear it when you want, buy it when you
        want, gift it, celebrate with it, reward yourself with it and keep it
        forever.
      </p>
    </div>
  );
};

export default AboutMission;
