import styles from "../scss/Checkout.module.scss";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className={styles.carts}>
      <table className={styles.cartTable}>
        <tbody>
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
              <div className={styles.cartItemControl}>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
            </td>
            <td className={styles.cartItemTotal}>25 €</td>
          </tr>
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
              <div className={styles.cartItemControl}>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
            </td>
            <td className={styles.cartItemTotal}>25 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
