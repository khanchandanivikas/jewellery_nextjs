import { useState } from "react";
import Carousal from "../carousal/Carousal";
import CarousalDots from "../carousal/CarousalDots";

const ProductCarousal = ({ product }) => {
  const [index, setIndex] = useState(0);
  return (
    <section>
      <Carousal
        images={product.images}
        index={index}
        setIndex={setIndex}
        url="products"
      />
      <div>
        <CarousalDots
          images={product.images}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </section>
  );
};

export default ProductCarousal;
