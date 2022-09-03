import styles from "../scss/ProductFilter.module.scss";

const ProductFilter = ({ setSort, handleFilters }) => {
  return (
    <div className={styles.filterBox}>
      <h2>Necklaces</h2>
      <div className={styles.filterBox_dropdowns}>
        <select
          name="color"
          onChange={handleFilters}
          className={styles.filterBox_dropdowns_filter}
        >
          <option disabled>Color</option>
          <option value="">all</option>
          <option>gold</option>
          <option>silver</option>
        </select>
        <select
          onChange={(e) => setSort(e.target.value)}
          className={styles.filterBox_dropdowns_sort}
        >
          <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
