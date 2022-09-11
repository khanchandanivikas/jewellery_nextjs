import Image from "next/image";
import styles from "../scss/CartItem.module.scss";
import ProductControl from "./ProductControl";

const CartItem = ({ cart }) => {
  return (
    <tr className={styles.cartItem}>
      <td className={styles.cartTitle}>
        <Image
          src="/images/products/rolex1.jpg"
          alt="product"
          width={50}
          height={50}
        />
        {cart.name}
      </td>
      <td className={styles.cartDescription}>{cart.name}</td>
      <td>
        <ProductControl product={cart} />
      </td>
      <td className={styles.cartItemTotal}>{cart.price * cart.quantity} €</td>
    </tr>
  );
};

export default CartItem;
