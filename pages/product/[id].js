import ProductCarousal from "../../components/product/ProductCarousal";
import ProductHeader from "../../components/product/ProductHeader";
import ProductDescription from "../../components/product/ProductDescription";
import ProductShipping from "../../components/product/ProductShipping";
import styles from "../../scss/product/Product.module.scss";
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
      <section>
        <ProductHeader product={product} />
        <ProductDescription product={product} />
        <ProductShipping product={product} />
      </section>
    </div>
  );
};

export default Product;
