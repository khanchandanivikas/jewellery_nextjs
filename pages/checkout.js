import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import styles from "../scss/Checkout.module.scss";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const router = useRouter();
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
    if (cartList.length > 0) {
      if (user.token) {
        createCheckOutSession();
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
            return <CartItem key={cart.id} cart={cart} />;
          })}
        </tbody>
      </table>
      {cartList.length < 1 && <p>No Items in cart</p>}
      <Button
        text={cartList.length > 0 ? "Checkout" : "Continue shopping"}
        onClick={finalizeCheckout}
      />
    </div>
  );
};

export default Checkout;
