import ShopLanding from "../components/ShopLanding";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import { useState } from "react";

const Shop = () => {
  const [filters, setFilters] = useState({});
  console.log(filters);
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    if (e.target.value) {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    } else {
      delete filters[e.target.name];
      setFilters({ ...filters });
    }
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
