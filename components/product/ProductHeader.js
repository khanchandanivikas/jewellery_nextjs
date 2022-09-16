import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../../scss/product/ProductHeader.module.scss";
import ProductControl from "./ProductControl";
import { useState } from "react";
import ColorSelector from "../ColorSelector";

const ProductHeader = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(0);

  return (
    <div className={styles.productHeaderContainer}>
      <h3 className={styles.name}>
        {product.name} - {product.price}
      </h3>
      <ColorSelector
        color={product.color}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />
      <div className={styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <ProductControl product={product} colorSelected={colorSelected} />
    </div>
  );
};

export default ProductHeader;
