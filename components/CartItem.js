import Image from "next/image";
import styles from "../scss/CartItem.module.scss";
import ProductControl from "./product/ProductControl";

const CartItem = ({ cart }) => {
  return (
    <tr className={styles.cartItem}>
      <td className={styles.cartTitle}>
        <Image
          src={`/images/products/${cart.images[0].name}`}
          alt="product"
          width={50}
          height={50}
        />
        {cart.name}
      </td>
      <td className={styles.cartDescription}>{cart.name} {cart.color}</td>
      <td>
        <ProductControl product={cart} colorSelected={cart.color} />
      </td>
      <td className={styles.cartItemTotal}>{cart.price * cart.quantity} €</td>
    </tr>
  );
};

export default CartItem;
