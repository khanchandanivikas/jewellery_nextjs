import {
  incrementQuantity,
  decrementQuantity,
} from "../../store/reducers/cartReducers";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "../../scss/product/ProductControl.module.scss";

const ProductControl = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartReducer.cart);

  const [qty, setQty] = useState(0);
  const getQuantity = cartList?.filter((item) => {
    return item.id === product.id;
  });

  useEffect(() => {
    setQty(getQuantity.length > 0 ? getQuantity[0].quantity : 0);
  }, [cartList]);

  const incQty = (product) => {
    dispatch(incrementQuantity(product));
    toast.success("Added 1 " + `${product.name}` + " to cart");
  }

  const decQty = (product) => {
    dispatch(decrementQuantity(product));
    toast.success("Removed 1 " + `${product.name}` + " from cart");
  }

  return (
    <div className={styles.cartItemControl}>
      <button
        disabled={qty === 0}
        onClick={() => decQty(product)}
      >
        -
      </button>
      <span>{qty}</span>
      <button onClick={() => incQty(product)}>+</button>
      <Toaster />
    </div>
  );
};

export default ProductControl;
