import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faRotateLeft,
  faShield,
  faR,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../scss/product/ProductShipping.module.scss";

const ProductShipping = () => {
  return (
    <ul className={styles.productShippingList}>
      <li className={styles.productShippingList_item}>
        <FontAwesomeIcon icon={faTruckFast} /> Fast Shipping
      </li>
      <li className={styles.productShippingList_item}>
        <FontAwesomeIcon icon={faRotateLeft} /> 60 Days Return
      </li>
      <li className={styles.productShippingList_item}>
        <FontAwesomeIcon icon={faShield} /> 2 Years warranty
      </li>
    </ul>
  );
};

export default ProductShipping;
