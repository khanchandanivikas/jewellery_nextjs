import ProductCarousal from "../../components/ProductCarousal";
import ProductHeader from "../../components/ProductHeader";
import ProductDescription from "../../components/ProductDescription";
import ProductShipping from "../../components/ProductShipping";
import styles from "../../scss/Product.module.scss";
import Products from "../../assets/products.json";

export async function getServerSidePaths() {
  try {
    const paths = Products.map((product) => {
      return { params: { id: product.id } };
    });
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.log(error);
  }
}

export async function getServerSideProps({ params }) {
  const product = Products.find((product) => product.id === params.id);
  return { props: { product } };
}

const Product = ({ product }) => {
  return (
    <div className={styles.productWrapper}>
      <ProductCarousal product={product} />
      <div>
        <ProductHeader product={product} />
        <ProductDescription product={product} />
        <ProductShipping product={product} />
      </div>
    </div>
  );
};

export default Product;
