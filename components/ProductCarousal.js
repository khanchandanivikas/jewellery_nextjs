import Image from "next/image";
import LandingCarousalDots from "../components/LandingCarousalDots";
import { useState } from "react";
import LandingCarousal from "../components/LandingCarousal";

const ProductCarousal = ({ product }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <LandingCarousal
        images={product.images}
        index={index}
        setIndex={setIndex}
        url="products"
      />
      <div>
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
