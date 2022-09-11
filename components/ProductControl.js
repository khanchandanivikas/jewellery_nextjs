import {
  incrementQuantity,
  decrementQuantity,
} from "../store/reducers/cartReducers";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styles from "../scss/product/ProductControl.module.scss";

const ProductControl = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  const [qty, setQty] = useState(0);
  const getQuantity = cartList.filter((item) => {
    return item.id === product.id;
  });

  useEffect(() => {
    setQty(getQuantity.length > 0 ? getQuantity[0].quantity : 0);
  }, [cartList]);

  return (
    <div className={styles.cartItemControl}>
      <button
        disabled={qty === 0}
        onClick={() => dispatch(decrementQuantity(product))}
      >
        -
      </button>
      <span>{qty}</span>
      <button onClick={() => dispatch(incrementQuantity(product))}>+</button>
    </div>
  );
};

export default ProductControl;
