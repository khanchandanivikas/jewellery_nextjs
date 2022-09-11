import Image from "next/image";
import CeoImage from "../images/ceo.jpg";
import styles from "../scss/about/AboutCeo.module.scss";

const AboutCeo = () => {
  return (
    <section className={styles.ceo}>
      <div className={styles.image}>
        <Image src={CeoImage} width={350} height={450} alt="CEO_midas" />
      </div>
      <div className={styles.content}>
        <p className={styles.message}>
          ¨I founded Midas because I saw a jewelry industry that was built for
          men gifting women and not women celebrating themselves.¨
        </p>
        <p className={styles.name}>- Vikas Khanchandani, CEO</p>
      </div>
    </section>
  );
};

export default AboutCeo;
