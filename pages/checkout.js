import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { clearCart } from "../store/reducers/cartReducers";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import styles from "../scss/Checkout.module.scss";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  const finalizeCheckout = async () => {
    if (cartList.length > 0) {
      if (user.token) {
        await createCheckOutSession();
        dispatch(clearCart());
      } else {
        Swal.fire({
          icon: "error",
          title: "Not Logged in",
          text: "You must login/signup to order.",
          confirmButtonColor: "#775A4C",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });
      }
    } else {
      router.push("/shop");
    }
  };

  return (
    <div className={styles.carts}>
      <table className={styles.cartTable}>
        <tbody>
          {cartList?.map((cart) => {
            return <CartItem key={cart.id + cart.color} cart={cart} />;
          })}
        </tbody>
      </table>
      {cartList.length < 1 && <p>No Items in cart</p>}
      <div className={styles.cartOptions}>
        <Button
          text={cartList.length > 0 ? "Checkout" : "Continue shopping"}
          onClick={finalizeCheckout}
        />
        {cartList.length > 0 && (
          <Button text="Clear cart" onClick={() => dispatch(clearCart())} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
