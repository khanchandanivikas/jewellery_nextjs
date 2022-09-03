import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ProductHeader.module.scss";

const ProductHeader = ({product}) => {
  return (
    <div>
      <h3>{product.name} - {product.price}</h3>
      <div className={styles.product_description}>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <h5>14k Yellow Gold</h5>
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
