import Image from "next/image";
import CeoImage from "../images/ceo.jpg";
import styles from "../scss/AboutCeo.module.scss";

const AboutCeo = () => {
  return (
    <section className={styles.ceo}>
      <div className={styles.ceo_image}>
        <Image src={CeoImage} width={400} height={450} alt="CEO_midas" />
      </div>
      <div className={styles.ceo_content}>
        <p className={styles.ceo_content_message}>
          ¨I founded Midas because I saw a jewelry industry that was built for
          men gifting women and not women celebrating themselves.¨
        </p>
        <p className={styles.ceo_content_name}>- Vikas Khanchandani, CEO</p>
      </div>
    </section>
  );
};

export default AboutCeo;