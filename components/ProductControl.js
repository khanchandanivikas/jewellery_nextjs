import styles from "../scss/ProductControl.module.scss";

const ProductControl = () => {
  return (
    <div className={styles.cartItemControl}>
      <button>+</button>
      <span>1</span>
      <button>-</button>
    </div>
  );
};

export default ProductControl;
