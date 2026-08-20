import { useOutletContext } from "react-router";
import ProductCard from "./ProductCard.tsx";
import type { Product } from "../types/Product";

const Products = () => {
  const { products } = useOutletContext<{ products: Product[] }>();

  return (
    <section>
      <div>Products</div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
};

export default Products;
