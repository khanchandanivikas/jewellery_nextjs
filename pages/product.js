import ProductCarousal from "../components/ProductCarousal";
import ProductHeader from "../components/ProductHeader";
import ProductDescription from "../components/ProductDescription";
import ProductShipping from "../components/ProductShipping";
import styles from "../scss/Product.module.scss";

const Product = () => {
  return (
    <div className={styles.productWrapper}>
      <ProductCarousal />
      <div>
        <ProductHeader />
        <ProductDescription />
        <ProductShipping />
      </div>
    </div>
  );
};

export default Product;
