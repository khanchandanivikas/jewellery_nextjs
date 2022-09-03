import styles from "../scss/ProductDescription.module.scss";

const ProductDescription = ({ product }) => {
  return (
    <div className={styles.productInfo}>
      <h3 className={styles.productInfo_heading}>DESCRIPTION & DETAILS</h3>
      <p className={styles.productInfo_details}>{product.description}</p>
      <ul className={styles.productInfo_list}>
        {product.details.map((detail) => {
          return (
            <li key={detail} className={styles.productInfo_list_item}>
              - {detail}
            </li>
          );
        })}
      </ul>
      <h3 className={styles.productInfo_heading}>Materials</h3>
      <ul className={styles.productInfo_list_material}>
        {product.materials.map((material) => {
          return (
            <li
              key={material}
              className={styles.productInfo_list_material_item}
            >
              {material}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDescription;
