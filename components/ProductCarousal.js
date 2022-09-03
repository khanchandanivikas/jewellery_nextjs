import Image from "next/image";
import styles from "../scss/ProductCarousal.module.scss";
import ProductImage from "../images/product-image.jpg";
import LandingCarousalDots from "../components/LandingCarousalDots";
import { useState } from "react";
import LandingCarousal from "../components/LandingCarousal";

const ProductCarousal = ({ product }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.productCarousal}>
      <LandingCarousal images={product.images} index={index} url="products" />
      <div className={styles.productCarousal_dots}>
        <LandingCarousalDots
          images={product.images}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
};

export default ProductCarousal;
