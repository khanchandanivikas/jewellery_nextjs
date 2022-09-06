import styles from "../scss/ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { addCart, increaseQuantity } from "../store/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const product = props.product;
  const cartList = useSelector((state) => state.carts);
  console.log(cartList);

  const { images, name, price, id } = product;
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
        <p className={styles.products_item_details_price}>{price}</p>
        <div className={styles.products_item_details_footer}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <p className={styles.products_item_details_footer_description}>
            24k gold
          </p>
        </div>
        <button
          onClick={() => dispatch(addCart(product))}
          className={styles.products_item_details_cartBtn}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
