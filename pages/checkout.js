import styles from "../scss/Checkout.module.scss";
import CartItem from "../components/CartItem";

const Checkout = () => {
  return (
    <div className={styles.carts}>
      <table className={styles.cartTable}>
        <tbody>
          <CartItem />
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
