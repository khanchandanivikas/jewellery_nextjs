import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import styles from "../scss/Checkout.module.scss";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const cartList = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.authReducer.currentUser);

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/stripe_checkout", {
      items: cartList,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  const finalizeCheckout = () => {
    if (user.token) {
      createCheckOutSession();
    } else {

    }
  }

  return (
    <div className={styles.carts}>
      <table className={styles.cartTable}>
        <tbody>
          {cartList?.map((cart) => {
            return <CartItem key={cart.id} cart={cart} />;
          })}
        </tbody>
      </table>
      {cartList.length > 0 ? (
        <Button text="Checkout" onClick={createCheckOutSession} />
      ) : (
        <>
          <p>No Items in cart</p>
          <Button text="Go to store" url="/shop" />
        </>
      )}
    </div>
  );
};

export default Checkout;
