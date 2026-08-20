import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }:ProductCardProps) => {
  return <div>
    {product.sku}
    {product.name}
    {product.description}
  </div>;
};

export default ProductCard;
