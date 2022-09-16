import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/cartReducers";
import { formatCurrency } from "../utils/formatCurrency";
import Rating from "./Rating";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ProductCard.module.scss";
import ColorSelector from "./ColorSelector";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const product = props.product;

  const { color, images, name, price, id } = product;

  const [colorSelected, setColorSelected] = useState(0);

  const addCart = (product) => {
    dispatch(addToCart({ product, color: color[colorSelected] }));
    toast.success(`${product.name}` + " added to cart");
  };

  return (
    <div className={styles.products_item}>
      <div className={styles.products_item_image}>
        <Image
          src={`/images/products/${images[0].name}`}
          width={400}
          height={400}
          alt={name}
        />
      </div>
      <div className={styles.products_item_details}>
        <Link href={`/product/${id}`}>{name}</Link>
        <span className={styles.products_item_details_price}>
          {formatCurrency(product.price)}
        </span>
        <Rating rate={product?.rating?.rate} count={product?.rating?.count} />
        <ColorSelector
          color={color}
          colorSelected={colorSelected}
          setColorSelected={setColorSelected}
        />
        <button
          onClick={() => addCart(product)}
          className={styles.products_item_details_cartBtn}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCard;
