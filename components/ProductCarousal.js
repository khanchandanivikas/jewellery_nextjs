import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ProductCarousal.module.scss";
import ProductImage from "../images/product-image.jpg";

const ProductCarousal = () => {
  return (
    <div className={styles.productCarousal}>
      <img
        className={styles.productCarousal_image}
        src={ProductImage.src}
        width={480}
        height={480}
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
