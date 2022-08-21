import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../scss/ProductList.module.scss";
import ProductOne from "../images/product1.jpg";

const ProductList = () => {
  return (
    <div className={styles.products}>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
          <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
         <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
         <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
         <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
         <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
      <div className={styles.products_item}>
        <div className={styles.products_item_image}>
          <Image src={ProductOne} alt="product_image" />
        </div>
        <div className={styles.products_item_details}>
          <p className={styles.products_item_details_title}>
            Boyfriend Bold Chain Necklace
          </p>
          <p className={styles.products_item_details_price}>$300</p>
          <div className={styles.products_item_details_footer}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <p className={styles.products_item_details_footer_description}>
              14k Yellow Gold
            </p>
          </div>
         <button className={styles.products_item_details_cartBtn}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
