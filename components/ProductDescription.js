import styles from "../scss/ProductDescription.module.scss";

const ProductDescription = () => {
  return (
    <div className={styles.productInfo}>
      <h3 className={styles.productInfo_heading}>DESCRIPTION & DETAILS</h3>
      <p className={styles.productInfo_details}>
        Looking like a French girl isnt as difficile as it seems. Handcrafted
        in vermeil, a thick 18k gold layer on sterling silver. Consider this
        croissan inspired hoops to make all your Parisian dreams come true.
      </p>
      <ul className={styles.productInfo_list}>
        <li className={styles.productInfo_list_item}>
          - Made in gold vermeil: a thick 18k gold layer on sterling silver.
        </li>
        <li className={styles.productInfo_list_item}>- Diameter: 17.15 mm.</li>
        <li className={styles.productInfo_list_item}>
          - Width: 3.8 - 6.0 mm.
        </li>
      </ul>
      <h3 className={styles.productInfo_heading}>Materials</h3>
      <ul className={styles.productInfo_list_material}>
        <li className={styles.productInfo_list_material_item}>Gold Vermeil</li>
      </ul>
    </div>
  );
};

export default ProductDescription;
