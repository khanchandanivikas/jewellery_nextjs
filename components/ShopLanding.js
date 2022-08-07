import Image from "next/image";
import styles from "../scss/ShopLanding.module.scss";
import landingImage1 from "../images/shop-image1.jpg";
import landingImage2 from "../images/shop-image2.jpg";

const ShopLanding = () => {
  return (
    <div className={styles.shopLanding}>
      <Image
        src={landingImage1}
        width={400}
        height={500}
        alt="earrings_image"
      />
      <Image
        src={landingImage2}
        width={400}
        height={500}
        alt="necklace_image"
      />
      <div className={styles.shopLanding_content}>
        <h1>BOLD.NEW.YOU</h1>
        <p className={styles.shopLanding_content_text}>
          Fine jewellery to feel confident in
        </p>
        <button className={styles.shopLanding_content_btn}>
          Shop best sellers
        </button>
      </div>
    </div>
  );
};

export default ShopLanding;
