import Image from "next/image";
import styles from "../scss/CartItem.module.scss";
import ProductControl from "./ProductControl";

const CartItem = () => {
  return (
    <tr className={styles.cartItem}>
      <td className={styles.cartTitle}>
        <Image
          src="/images/products/rolex1.jpg"
          alt="product"
          width={50}
          height={50}
        />
        Rolex
      </td>
      <td className={styles.cartDescription}>Bonito rgfn re</td>
      <td>
        <ProductControl />
      </td>
      <td className={styles.cartItemTotal}>25 €</td>
    </tr>
  );
};

export default CartItem;
