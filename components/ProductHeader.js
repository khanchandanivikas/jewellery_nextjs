import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ProductHeader.module.scss";
import ProductControl from "./ProductControl";

const ProductHeader = ({ product }) => {
  return (
    <div className={styles.productHeaderContainer}>
      <h3 className={styles.name}>
        {product.name} - {product.price}
      </h3>
      <div className={styles.description}>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <h5>14k Yellow Gold</h5>
      </div>
      <div className={styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <ProductControl product={product} />
    </div>
  );
};

export default ProductHeader;
