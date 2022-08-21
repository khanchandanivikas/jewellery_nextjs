import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../scss/ProductCarousal.module.scss";
import ProductImage from "../images/product-image.jpg";

const ProductCarousal = () => {
  return (
    <div className={styles.productCarousal}>
      <Image
        src={ProductImage.src}
        width={768}
        height={768}
        alt="product_image"
      />
      <div className={styles.productCarousal_dots}>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
      </div>
    </div>
  );
};

export default ProductCarousal;
