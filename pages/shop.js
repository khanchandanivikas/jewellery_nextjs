import ShopLanding from "../components/ShopLanding";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import { useState } from "react";

const Shop = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ShopLanding />
      <ProductFilter setSort={setSort} handleFilters={handleFilters} />
      <ProductList filters={filters} sort={sort} />
    </div>
  );
};

export default Shop;
