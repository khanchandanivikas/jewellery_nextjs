import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ProductHeader.module.scss";

const ProductHeader = () => {
  return (
    <div className={styles.product}>
      <h3>Croissant Dôme Hoops - $78</h3>
      <div className={styles.product_description}>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <p className={styles.products_description_text}>14k Yellow Gold</p>
      </div>
      <div className={styles.product_rating}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <button className={styles.product_addToCart_btn}>Add to cart</button>
    </div>
  );
};

export default ProductHeader;
