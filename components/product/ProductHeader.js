import { formatCurrency } from "../../utils/formatCurrency";
import Rating from "../Rating";
import styles from "../../scss/product/ProductHeader.module.scss";
import ProductControl from "./ProductControl";
import { useState } from "react";
import ColorSelector from "../ColorSelector";

const ProductHeader = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(0);

  return (
    <div className={styles.productHeaderContainer}>
      <h3 className={styles.name}>
        {product.name} - {formatCurrency(product.price)}
      </h3>
      <ColorSelector
        color={product.color}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />
      <Rating rate={product?.rating?.rate} count={product?.rating?.count} />
      <ProductControl product={product} colorSelected={colorSelected} />
    </div>
  );
};

export default ProductHeader;
