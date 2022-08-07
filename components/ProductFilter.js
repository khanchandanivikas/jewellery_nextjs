import styles from "../scss/ProductFilter.module.scss";

const ProductFilter = () => {
  return (
    <div className={styles.filterBox}>
      <h2>Necklaces</h2>
      <div className={styles.filterBox_dropdowns}>
        <select name="" id="" className={styles.filterBox_dropdowns_filter}>
          <option value="">Filter</option>
          <option value="">filter2</option>
        </select>
        <select name="" id="" className={styles.filterBox_dropdowns_sort}>
          <option value="">Sort</option>
          <option value="">filter2</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
